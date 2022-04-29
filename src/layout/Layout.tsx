import React from "react";
import { Container } from "reactstrap";
import { ToastContainer } from "react-toastify";
import AppRouter from "../router/AppRouter";
import NavBar from "./navbar/NavBar";

interface Props {}

const Layout = (props: Props) => {
  return (
    <div>
      <NavBar />
      <main
        className="main"
        // style={
        //   darkMode
        //     ? { color: light, backgroundColor: dark }
        //     : { color: dark, backgroundColor: light }
        // }
      >
        <Container fluid className="p-0">
          <AppRouter />
        </Container>
        <ToastContainer />
      </main>
    </div>
  );
};

export default Layout;
