import React from "react";
import AppRouter from "../router/AppRouter";
import NavBar from "./navbar/NavBar";

interface Props {}

const Layout = (props: Props) => {
  return (
    <div>
      <NavBar />
      <AppRouter />
    </div>
  );
};

export default Layout;
