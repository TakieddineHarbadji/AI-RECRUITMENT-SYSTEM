import React from 'react';
import map from '../../assets/images/map.png';

export default function MapSection(){
    return(
        <section className='map-section'>
            <img src={map} alt="map of i dont know what exactly" />

        <style jsx>{`
            .map-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem; /* margin inside the section */
  min-height: 100vh; /* make it at least full viewport height */
  box-sizing: border-box; /* include padding inside the width/height */
  background-color: #ffffff; /* optional: light background */
}

.map-section img {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem; /* optional: slightly rounded corners */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* optional: soft shadow */
}

            `}
        </style>
        </section>
            )
}