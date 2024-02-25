import React from "react";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import XEditor from "./components/XEditor";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Auth from "./pages/Auth";
import Verification from "./pages/Auth/Verification";
import config from "./config/config";
import Home from "./pages/Home";
import Error from "./components/Custom/Error";
import relativeTime from "dayjs/plugin/relativeTime.js";
import dayjs from "dayjs";
import Background from "./components/Header/Background";
import Header from "./components/Header/Header";
import DocumentView from "./pages/DocumentView";
import Project from "./pages/Project";

const App = () => {
  dayjs.extend(relativeTime);
  const { search } = useLocation();
  const isLoggedIn = useSelector((state) => state.user.isLogged);
  const routes = useRoutes([
    { path: config.PATHNAMES.HOME, element: <Home /> },
    { path: config.PATHNAMES.TEST, element: <XEditor /> },
    { path: config.PATHNAMES.DOCUMENTVIEW, element: <DocumentView /> },
    isLoggedIn && { path: config.PATHNAMES.PROJECT, element: <Project /> },
    !isLoggedIn && {
      path: config.PATHNAMES.AUTH,
      element: <Auth />,
      children: [
        { path: config.PATHNAMES.AUTH, element: <Navigate to={config.PATHNAMES.LOGIN} /> },
        { path: config.PATHNAMES.REGISTER, element: <Register /> },
        { path: config.PATHNAMES.LOGIN, element: <Login /> },
      ],
    },
    !isLoggedIn &&
      search === `?token=${config.SECRET}` && {
        path: config.PATHNAMES.VERIFYEMAIL,
        element: <Verification />,
      },
    { path: "*", element: <Error /> },
  ]);

  return (
    <>
      <div className='w-screen h-screen'>
        <Background />
        <Header>{routes}</Header>
      </div>
    </>
  );
};

export default App;
