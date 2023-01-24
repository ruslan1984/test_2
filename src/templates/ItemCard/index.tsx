import React, { FC, useEffect, useCallback, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { reducerType } from "@/store";
import Presenter from "./Presenter";
import { requestCard } from "./reducer";
import Preloader from "@/components/Preloader";
import ErrorMessage from "@/components/ErrorMessage";
import Layout from "../Layout";

const ItemCard: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading, error } = useSelector(
    (state: reducerType) => state.itemCardReducer
  );

  useEffect(() => {
    if (!id) return;
    dispatch(requestCard(id));
  }, [id]);

  const refreshClick = useCallback(() => {
    if (!id) return;
    dispatch(requestCard(id));
  }, [id]);

  if (JSON.stringify(data) === "{}") {
    const red = confirm(
      `Услга с id ${id} не найдена. Наверно вы перезагрузили сервер. Перейти на главную страницу?`
    );
    if (red) {
      navigate("/");
    }
  }
  if (loading) return <Preloader />;
  if (error || !data) return <ErrorMessage refreshClick={refreshClick} />;
  return (
    <Layout
      loading={loading}
      error={error || !data}
      refreshClick={refreshClick}
    >
      <Presenter
        id={data.id}
        name={data.name}
        price={data.price}
        content={data.content}
      />
    </Layout>
  );
};

export default memo(ItemCard);
