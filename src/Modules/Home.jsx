import React from 'react';
import StylesH from '../css/home.module.css';
import imagez from '../images/image.jpg'; // Update the path to match the location of your image

const Home = () => {
  return (
    <div className={StylesH['home-container']}>
      <div className={StylesH['left-partition']}>
        <h1>Automate-email-distribution</h1>
      </div>
      <div className={StylesH['right-partition']}>
        <img src={imagez} alt="Image Alt Text" className={StylesH['right-partition-image']} />
      </div>
    </div>
  );
}

export default Home;
