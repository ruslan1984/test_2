import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemList from "@/templates/ItemList";
import ItemCard from "@/templates/ItemCard";

const RouteApp: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/:id" element={<ItemCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteApp;
