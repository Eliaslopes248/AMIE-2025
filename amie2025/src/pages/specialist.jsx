import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import { db } from '../db';
import { collection, getDocs } from 'firebase/firestore';

const Map = ({ user }) => {
  const [coordinates, setCoordinates] = useState([]);
  const [filteredCoordinates, setFilteredCoordinates] = useState([]);
  const [map, setMap] = useState(null);
  const [showPopup, setShowPopup] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [markers, setMarkers] = useState([]);

  // Fetch coordinates from Firestore
  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "doctors"));
        const coords = querySnapshot.docs.map(doc => {
          const data = doc.data();
          console.log("Fetched Data:", data); // Debugging output
    
          if (data.location && data.location.geoPoint) {
            return {
              lat: data.location.geoPoint.latitude,
              lng: data.location.geoPoint.longitude,
              address: data.location.address || "Unknown Address",
              rating: data.rating || "No rating",
              title: data.clinic || "Unknown",
              name: data.name,
              specialties: data.specialties || "No specialties listed",
              availability: data.availability || { days: [], slots: [] }
            };
          } else {
            console.warn("Missing geoPoint for:", data);
            return null;
          }
        }).filter(coord => coord !== null);
    
        console.log("Parsed Coordinates:", coords);
        setCoordinates(coords);
        setFilteredCoordinates(coords);
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };       

    fetchCoordinates();
  }, []);

  // Load Google Maps API script and initialize the map
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCs3GUoLghEGeGk2JxQc1YBI28kfNsiqSo&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      setMap(new google.maps.Map(document.getElementById('map'), {
        center: { lat: 36.0826, lng: -79.800 },
        zoom: 12.8,
        styles: [
          { featureType: "poi", elementType: "all", stylers: [{ visibility: "off" }] },
          { featureType: "transit", elementType: "all", stylers: [{ visibility: "off" }] },
          { featureType: "road", elementType: "labels", stylers: [{ visibility: "off" }] }
        ],
        mapTypeControlOptions: { mapTypeIds: ["roadmap", "satellite"] }
      }));
    };

    return () => document.head.removeChild(script);
  }, []);

  // Add markers when map and coordinates are available
  useEffect(() => {
    if (!map) return;

    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));
    setMarkers([]);

    if (filteredCoordinates.length === 0 && searchQuery !== '') return;

    const customIcon = {
      url: 'http://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png',
      scaledSize: new google.maps.Size(32, 32)
    };

    const infoWindow = new google.maps.InfoWindow();
    const schedulingWindow = new google.maps.InfoWindow();
    
    const newMarkers = filteredCoordinates.map(coord => {
      const marker = new google.maps.Marker({
        position: { lat: coord.lat, lng: coord.lng },
        map: map,
        icon: customIcon,
        title: coord.title
      });
    
      marker.addListener('click', () => {
        infoWindow.setContent(`
          <div class="fade-in p-2 bg-[#bff4fb] rounded-lg shadow-md w-70 h-63 flex flex-col justify-center items-center">
            <div class="text-lg font-sans p-2 text-center w-full flex justify-center items-center">
              <strong><u>${coord.title}</u><br>${coord.name} - <i>${coord.rating} ⭐️</i></strong>
            </div>
            <div class="text-sm font-sans p-2 text-center w-full flex justify-center items-center">
              <strong>Specialty: ${coord.specialties}</strong>
            </div>
            <div class="text-sm font-sans p-2 text-center w-full flex justify-center items-center">
              <strong><i>${coord.address}</i></strong>
            </div>
            <button id="schedule-btn" class="mt-2 bg-blue-500 text-white py-1 px-4 rounded">Schedule</button>
          </div>
        `);
        
        infoWindow.open(map, marker);
    
        google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
          document.getElementById('schedule-btn').addEventListener('click', () => {
            infoWindow.close();
    
            // Open the scheduling window with filtered options
            schedulingWindow.setContent(`
              <div class="fade-in p-4 bg-[#9ef4ff] rounded-lg shadow-md w-96 h-auto flex flex-col justify-center items-center">
                <div class="text-lg font-sans p-2 text-center w-full flex justify-center items-center">
                  <strong><u>${coord.title}</u><br>${coord.name} - <i>${coord.rating} ⭐️</i></strong>
                </div>
                <form class="w-full flex flex-col items-center">
                  <div class="mb-4 w-full flex flex-col items-center">
                    <label for="day" class="block text-sm font-medium text-gray-700">Day of the Week</label>
                    <select id="day" name="day" class="mt-1 block w-3/4 p-2 border border-gray-300 rounded-md shadow-sm">
                      ${coord.availability.days.map(day => `<option>${day}</option>`).join('')}
                    </select>
                  </div>
                  <div class="mb-4 w-full flex flex-col items-center">
                    <label for="time" class="block text-sm font-medium text-gray-700">Time</label>
                    <select id="time" name="time" class="mt-1 block w-3/4 p-2 border border-gray-300 rounded-md shadow-sm">
                      ${coord.availability.slots.map(slot => `<option>${slot}</option>`).join('')}
                    </select>
                  </div>
                  <button type="submit" class="mt-2 bg-blue-500 text-white py-1 px-4 rounded">Schedule</button>
                </form>
                <div class="text-xs text-gray-700 mt-2 self-end">Choose from available times</div>
              </div>
            `);            
            schedulingWindow.open(map, marker);
          });
        });
      });

      return marker;
    });

    setMarkers(newMarkers);
    
  }, [map, filteredCoordinates]);

  // Filter coordinates based on search query
  useEffect(() => {
    console.log("Search Query:", searchQuery);
    const filtered = coordinates.filter(coord => {
      const nameMatch = coord.name.toLowerCase().includes(searchQuery.toLowerCase());
      const specialtiesMatch = typeof coord.specialties === 'string' && coord.specialties.toLowerCase().includes(searchQuery.toLowerCase());
      console.log("Name Match:", nameMatch, "Specialties Match:", specialtiesMatch, "Specialties:", coord.specialties);
      return nameMatch || specialtiesMatch;
    });
    console.log("Filtered Coordinates:", filtered);
    setFilteredCoordinates(filtered);
  }, [searchQuery, coordinates]);

  return (
    <div className="size-fit relative text-black text-center flex">
      <Navbar user={user} />
      {showPopup && (
        <div className="absolute top-15 right-3 bg-blue-500 text-white p-4 rounded-lg shadow-lg flex items-center z-50">
          <span className="mr-4">Select a marker to view clinic and doctor details.</span>
          <button onClick={() => setShowPopup(false)} className="text-lg font-bold">&times;</button>
        </div>
      )}
      <div className="absolute top-4 left-113 z-50">
        <input
          type="text"
          placeholder="Search by doctor name or specialty"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-400 rounded-md shadow-sm bg-gray-50 w-96"
        />
      </div>
      <div id="map" className="h-[100vh] w-[156.14vh] ml-[15vw] border-5 border-[#009CDE]"></div>
    </div>
  );
}

export default Map;