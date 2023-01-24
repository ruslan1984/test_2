import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  "@keyframes Preloader": {
    to: { transform: "Rotate(360deg)" },
  },
  preloaderAnimation: {
    animation: "$Preloader 2s infinite linear",
  },
  preloaderBox: {
    width: "100%",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
