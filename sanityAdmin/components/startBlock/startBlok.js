import React from 'react'
import styles from "./my.module.css";

const startBlok = () => {
  return (
    <div>
      <div className={styles.line}></div>
      <h2 className={styles.green}>Начало блока⇣</h2>
    </div>
  );
}

export default startBlok