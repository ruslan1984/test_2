import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestList } from "./reducer";
import Presenter from "./Presenter";
import { reducerType } from "@/store";
import Layout from "../Layout";
const Page = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: reducerType) => state.itemListReducer
  );
  useEffect(() => {
    dispatch(requestList());
  }, []);

  const refreshClick = useCallback(() => {
    dispatch(requestList());
  }, []);

  return (
    <Layout
      loading={loading}
      error={error || !data}
      refreshClick={refreshClick}
    >
      <Presenter itemList={data} />
    </Layout>
  );
};

export default Page;
