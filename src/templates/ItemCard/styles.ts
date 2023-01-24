import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  itemBorder: {
    border: "1px solid #eee",
    borderRadius: "5px",
    padding: "10px",
    background: "#efefef",
    boxShadow: "1px 1px 3px #8f8c8c",
  },
  header: {
    color: "green",
  },
  backBtn: {
    color: "black",
    padding: "10px",
    textDecoration: "none",
    display: "inline-block",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});
