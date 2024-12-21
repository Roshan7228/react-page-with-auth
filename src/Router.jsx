import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/home";
import Product from "./assets/pages/Product";
import Login from "./assets/pages/Login";
import Edit from "./assets/pages/Edit";
import Private from "./assets/pages/loginproduct";
import Description from "./assets/pages/Description";
import Cart from "./assets/pages/Cart";
import Fliter from "./assets/pages/Fliter";
function Route1r() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route
          path="/Product"
          element={
            <Private>
              <Product />
            </Private>
          }
        ></Route>
        <Route path="/description/:id" element={<Description />}></Route>
        <Route path="/Edit/:id" element={<Edit />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/Filter" element={<Fliter />}></Route>
      </Routes>
    </div>
  );
}

export default Route1r;
