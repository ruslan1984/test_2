import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  itemList: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "15px 10px",
    "@media (min-width: 415px)": {
      gridTemplateColumns: "1fr 1fr ",
    },
    "@media (min-width: 835px)": {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  },
  item: {
    padding: "10px",
    background: "#eee",
    borderRadius: "5px",
    textDecoration: "none",
    color: "black",
    transition: "0.5s",
    boxShadow: "1px 2px 2px #cdcdcd",
    "&:hover": {
      background: "#ddd",
    },
  },
});
