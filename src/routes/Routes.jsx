import React from "react";
import { Route, Routes } from "react-router-dom";
import { Products } from "../pages/Products";
import { MyOrders } from "../pages/MyOrders";
import { MyCard } from "../pages/MyCard";
import { Detail } from "../pages/Detail";
import { styled } from "styled-components";

export const Routs = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Products/:id/details" element={<Detail />}></Route>
        <Route path="/My Card" element={<MyCard />}></Route>
        <Route path="/My Orders" element={<MyOrders />}></Route>
      </Routes>
    </AppContainer>
  );
};
const AppContainer = styled.div`
  background-color: #b9ccdd;
`;
