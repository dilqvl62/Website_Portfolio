import React, { useState, useEffect } from 'react';
import './dark-switch.css';

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
    <div className="col-12 col-md-auto">
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
      <a className="btn btn-cta-primary" href="" target="_blank">
        <i className="fas fa-paper-plane"></i> Contact Me
      </a>
    </div>
  );
};

export default DarkModeSwitch;











/*var darkSwitch = document.getElementById("darkSwitch");
window.addEventListener("load", function () {
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener("change", function () {
      resetTheme();
    });
  }
});


 
function initTheme() {
  var darkThemeSelected =
    localStorage.getItem("darkSwitch") !== null &&
    localStorage.getItem("darkSwitch") === "dark";
  darkSwitch.checked = darkThemeSelected;
  darkThemeSelected
    ? document.body.setAttribute("data-theme", "dark")
    : document.body.removeAttribute("data-theme");
}


function resetTheme() {
  if (darkSwitch.checked) {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("darkSwitch", "dark");
  } else {
    document.body.removeAttribute("data-theme");
    localStorage.removeItem("darkSwitch");
  }
}*/