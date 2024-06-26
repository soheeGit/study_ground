import React, { useState } from "react";
import { Routes, Route, Siwtch, useParams } from "react-router-dom";
import "./App.css";
import Work from "./Work/Work";
import Sidebar from "./Work/Sidebar/Sidebar";
import Login from "./Work/Login";
import Content from "./Work/Content/Content";
import { Switch } from "@mui/material";

const App = () => {
  const [isLogin, setIsLogin] = useState(true); // 로그인 상태
  const [studyId, setStudyId] = useState(2019316015); // 스터디 아이디
  {
    /* 로그인 상태 확인 api */
  }
  {
    /* studyId 요청 api */
  }
  const { studyNum } = useParams();
  console.log(studyNum);
  return (
    <>
      {isLogin ? (
        <Routes>
          <Route path="/work" element={<Work />}>
            <Route path="dashboard" element={<Work title="Dashboard" />} />
            <Route path="video" element={<Work title="Video" />} />
            <Route path="chat" element={<Work title="Chat" />} />
            <Route path="calendar" element={<Work title="Calendar" />} />
            <Route path="board" element={<Work title="Board" />} />
            <Route path="storage" element={<Work title="Storage" />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/work" element={<Login />} />
        </Routes>
      )}
    </>
  );
};

export default App;
