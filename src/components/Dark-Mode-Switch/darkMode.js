import React, { useState, useEffect } from 'react';
import './dark-switch.css';
import { Button } from '@material-ui/core';

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkThemeSelected =
      localStorage.getItem('darkSwitch') !== null &&
      localStorage.getItem('darkSwitch') === 'dark';
    setDarkMode(darkThemeSelected);
    if (darkThemeSelected) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, []);

  const onButtonSwitch = () => {
    setDarkMode(prevDarkMode => {
      const newDarkMode = !prevDarkMode;
      if (newDarkMode) {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkSwitch', 'dark');
      } else {
        document.body.removeAttribute('data-theme');
        localStorage.removeItem('darkSwitch');
      }
      return newDarkMode;
    });
  };

  return (
    <div  >
       
       {/* <Button className="btn btn-cta-primary" href="" target="_blank">
        <i className="fas fa-paper-plane"></i> Contact Me
      </Button> */}
      <div className="dark-mode-switch d-flex">
        <div className="form-check form-switch mx-auto mx-md-0">
          <input
            type="checkbox"
            className="form-check-input me-2"
            onChange={onButtonSwitch}
            checked={darkMode}
            id="darkSwitch"
          />
          <label className="custom-control-label" htmlFor="darkSwitch">
            Dark Mode
          </label>
        </div>
      </div>
     
    </div>
  );
};

export default DarkModeSwitch;
