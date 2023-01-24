import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import { TItemCard } from "./types";
import { useStyles } from "./styles";

const Presenter: FC<TItemCard> = ({ id, name, price, content }: TItemCard) => {
  const styles = useStyles();
  return (
    <>
      <h1>Услуга</h1>
      <Link className={styles.backBtn} to="/">
        {"<<<  Список товаров"}
      </Link>
      <div className={styles.itemBorder}>
        <h4>Услуга: {name}</h4>
        <div>Код: {id}</div>
        <div>Цена: {price}</div>
        <p>Описание: {content}</p>
      </div>
    </>
  );
};

export default memo(Presenter);
