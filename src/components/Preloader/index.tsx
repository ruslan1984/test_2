import React from "react";
import preloaderIcon from "./img/preloader.png";
import { useStyles } from "./styles";
const Loader = () => {
  const styles = useStyles();
  return (
    <div className={styles.preloaderBox}>
      <img className={styles.preloaderAnimation} src={preloaderIcon} />
    </div>
  );
};

export default Loader;
