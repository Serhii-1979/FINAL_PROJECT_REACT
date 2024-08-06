// src/components/Header/ToggleTheme.js
import React, { useContext, useEffect, useState } from 'react';
// import { ThemeContext } from '../../theme/ThemeContext';


import sunIcon from '../../assets/svg/sun.svg';
import moonIcon from '../../assets/svg/moon.svg';
import styles from './ToggleTheme.module.css';



const ToggleThemeButton = () => {
  // const { toggleTheme } = useContext(ThemeContext);
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('appTheme') === 'dark');

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDarkTheme(localStorage.getItem('appTheme') === 'dark');
    };
    window.addEventListener('storage', handleThemeChange);
    return () => {
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);

  // const handleToggleTheme = () => {
  //   toggleTheme();
  //   setIsDarkTheme((prevTheme) => !prevTheme);
  // };

  return (
    <button className={styles.toggle_theme_button} >
    {/* <button className={styles.toggle_theme_button} onClick={handleToggleTheme}> */}
      <img
        src={isDarkTheme ? moonIcon : sunIcon}
        alt={isDarkTheme ? 'Луна' : 'Солнце'}
        className={styles.theme_icon}
      />
    </button>
  );
};

export default ToggleThemeButton;
