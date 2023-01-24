import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  errorMessageBox: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    background: "#f9d0d4",
    padding: "10px 40px",
    color: "#8a2335",
    border: "1px solid #f5c1c6",
    borderRadius: "5px",
    gap: "15px",
  },
  btn: {
    color: "white",
    background: "#3a4046",
    border: "none",
    padding: "10px",
    fontSize: "15px",
    borderRadius: "5px",
    transition: "0.5s",
    cursor: "pointer",
    "&:hover": {
      background: "#666",
    },
  },
});
