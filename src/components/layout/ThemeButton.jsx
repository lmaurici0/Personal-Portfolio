import React, { useState, useEffect } from 'react';
import { IoIosMoon, IoMdSunny } from "react-icons/io";

import styles from '../../assets/css/ThemeButton.module.css'

const ThemeButton = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  const changeTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <button onClick={changeTheme} className={styles.changeBg}>
      {isLightMode ? <IoIosMoon /> : <IoMdSunny />
}
    </button>
  );
};

export default ThemeButton;
