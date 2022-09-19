import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="app__container">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default App;
