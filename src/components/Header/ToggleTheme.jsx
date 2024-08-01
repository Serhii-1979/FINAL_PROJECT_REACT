import React, { useState, useEffect } from 'react';
import sunIcon from '../../assets/svg/sun.svg'; 
import moonIcon from '../../assets/svg/moon.svg';
import styles from './ToggleTheme.module.css'; 

const ToggleThemeButton = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {

    document.body.className = isDarkTheme ? 'dark_theme' : 'light_theme';
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <button className={styles.toggle_theme_button} onClick={toggleTheme}>
      <img
        src={isDarkTheme ? moonIcon : sunIcon}
        alt={isDarkTheme ? 'Луна' : 'Солнце'}
        className={styles.theme_icon}
      />
    </button>
  );
};

export default ToggleThemeButton;
