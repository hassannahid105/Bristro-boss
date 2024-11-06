import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Menu from "../Pages/Menu/Menu/Menu";
import Home from "../Pages/Home/Home/Home";
import Order from "../Pages/Order/Order";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
    ],
  },
]);

export default router;
