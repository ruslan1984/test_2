import React from "react";
import { Link } from "react-router-dom";
import { TItem } from "./types";
import { useStyles } from "./styles";

interface IPresenter {
  itemList: TItem[];
}
const Presenter = ({ itemList }: IPresenter) => {
  const styles = useStyles();
  return (
    <>
      <h1>Наши услуги</h1>
      <div className={styles.itemList}>
        {itemList.map(({ id, name, price }) => (
          <Link className={styles.item} key={id} to={id}>
            <div>Name: {name}</div>
            <div>Price: {price}</div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Presenter;
