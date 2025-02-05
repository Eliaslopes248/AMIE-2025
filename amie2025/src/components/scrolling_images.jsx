import React from 'react'

export function ScrollingImages() {
  return (
    <>
    <div className="scrolling-images-container overflow-scroll bg-[#009CDE]">
      <div className="scrolling-images">
        <img
          src="src/assets/girlAtDoctor.jpg"
          alt="Happy Young girl at doctor"
          className="w-full h-full object-cover"
        />
        <img
          src="src\assets\nurse_checks_foot.webp"
          alt="Nurse examining foot"
          className="w-full h-full object-cover"
        />
        <img
          src="src\assets\successful_healthcare.jpg"
          alt="Successful Healthcare transaction"
          className="w-full h-full object-cover"
        />
        <img
          src="src\assets\man_getting_a_shot.jpg"
          alt="Man getting a shot in his arm"
          className="w-full h-full object-cover"
        />
        {/* Clone images for continuous scrolling effect */}
        <img
        src="src/assets/girlAtDoctor.jpg"
        alt="Happy Young girl at doctor"
        className="w-full h-full object-cover"
        />
        <img
          src="src\assets\nurse_checks_foot.webp"
          alt="Nurse examining foot"
          className="w-full h-full object-cover"
        />
        <img
          src="src\assets\successful_healthcare.jpg"
          alt="Successful Healthcare transaction"
          className="w-full h-full object-cover"
        />
        <img
          src="src\assets\man_getting_a_shot.jpg"
          alt="Man getting a shot in his arm"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    </>
  )
}
