import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/Layout";
import ScrollToTop from "./Utils";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Layout />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
