import React, { FC } from "react";
import { useStyles } from "./styles";

interface IErrorMessage {
  refreshClick: () => void;
}

const ErrorMessage: FC<IErrorMessage> = ({ refreshClick }: IErrorMessage) => {
  const styles = useStyles();
  return (
    <div className={styles.errorMessageBox}>
      <div>Произошла ошибка!</div>
      <button className={styles.btn} onClick={refreshClick}>
        Повторить запрос
      </button>
    </div>
  );
};

export default ErrorMessage;
