import React from "react";
import { Outlet } from "react-router-dom";
import "./Work.css";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";

const Work = (props) => {
  return (
    <div className="work-container">
      <Sidebar />
      <Content title={props.title} />
    </div>
  );
};

export default Work;
