import { useState } from "react";
import Courses from "./Courses";
import Header from "../components/Header";
import Dashboard from "./Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Details from "./Details";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet/>
      
    </>
  );
}

export default App;
