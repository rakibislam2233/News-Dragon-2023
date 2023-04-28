import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout/NewsLayout";
import News from "../Pages/News/News";
import LoginLayout from "../Layout/Main/LoginLayout";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path:'/',
        element: <Navigate to={'/catelogories/0'}></Navigate>
      },
      {
        path: "login",
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      }
    ],
  },
  {
    path: "catelogories",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/catelogories/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/newsDetails/${params.id}`),
      },
    ],
  },
]);

export default router;
