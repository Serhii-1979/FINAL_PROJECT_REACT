
import React, { useContext, useEffect, useState } from 'react';



import sunIcon from '../../assets/svg/sun.svg';
import moonIcon from '../../assets/svg/moon.svg';
import styles from './ToggleTheme.module.css';



const ToggleThemeButton = () => {
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

  return (
    <button className={styles.toggle_theme_button} >
      <img
        src={isDarkTheme ? moonIcon : sunIcon}
        alt={isDarkTheme ? 'Луна' : 'Солнце'}
        className={styles.theme_icon}
      />
    </button>
  );
};

export default ToggleThemeButton;
