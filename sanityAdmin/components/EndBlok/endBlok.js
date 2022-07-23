import React from "react";
import styles from "./my.module.css";


const endBlok = () => {
  return (
    <div>
      <h2 className={styles.red}>Конец блока⇡</h2>
      <div className={styles.line}></div>
    </div>
  );
}

export default endBlok