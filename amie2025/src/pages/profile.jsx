import React, { useState, useEffect } from 'react';
import { Typography, Avatar, List, ListItem, Box } from '@mui/material';
import { VscAccount } from "react-icons/vsc";
import { Navbar } from '../components/navbar';
import { db } from '../db';
import { doc, getDoc } from "firebase/firestore";

function Profile({ user }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user && user.username) {
      const fetchUserData = async () => {
        const userDoc = doc(db, "users", user.username);
        const docSnap = await getDoc(userDoc);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          setUserData({
            name: 'John Doe',
            age: '68',
            phone: '814-993-3950',
            insurance: 'United Healthcare',
            address: '123 getWell Dr',
            email: 'jDoe@gmail.com'
          });
        }
      };

      fetchUserData();
    }
  }, [user]);

  const data = [
    { label: 'Name:', value: userData?.name || '  John Doe' },
    { label: 'Age:', value: userData?.age || '  68' },
    { label: 'Phone:', value: userData?.phone || '  814-993-3950' },
    { label: 'Insurance:', value: userData?.insurance || '  United Healthcare' },
    { label: 'Address:', value: userData?.address || '  123 getWell Dr' },
    { label: 'Email:', value: userData?.email || '  jDoe@gmail.com' }
  ];

  return (
    <div className="flex h-screen">
      <Navbar user={{ user }} />
      <div className="w-[80vw] h-[88vh] border-black translate-x-[17vw] 
            translate-y-[3.5vh] shadow-md shadow-gray-400 flex flex-col 
            items-center overflow-hidden gap-[20px] border-2">
        <Box className="w-full flex justify-center mb-4" sx={{ backgroundColor: '#009CDE' }}>
          <Box className="text-white px-4 py-2 rounded" sx={{ backgroundColor: '#009CDE' }}>
            <Typography variant='h4' className='mb-4'><strong>Account</strong></Typography>
          </Box>
        </Box>

        <Box className="flex w-full px-8 ml-auto" sx={{ padding: '100px' }}>
          <Avatar style={{ width: '400px', height: '400px', marginLeft: '100px' }}>
            <VscAccount style={{ fontSize: '100px', width: '100%', height: '100%', backgroundColor: '#009CDE' }} />
          </Avatar>
          <Box className="flex flex-col items-end">
            <List className='justify-end'>
              {data.map((item, index) => (
                <React.Fragment key={index}>
                  <ListItem className='mb-8 w-full flex justify-end'>
                    <Typography variant='h5' className="text-left" sx={{ paddingLeft: '70px' }}>
                      <strong>{item.label}</strong> <span className='text-grey-400'>{item.value}</span>
                    </Typography>
                  </ListItem>
                  {index < data.length - 1 && (
                    <Box className="w-full flex justify-end">
                    </Box>
                  )}
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Profile;