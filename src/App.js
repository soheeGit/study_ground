import React, { useState } from 'react';
import { Routes, Route, Siwtch, useParams } from 'react-router-dom';
import './App.css';
import Work from './Work/Work';
import Sidebar from './Work/Sidebar/Sidebar';
import Login from './Work/Login';
import BigCalendar from './Work/Content/Calendar/Calendar';
import Video from './Work/Content/Video/Video';
import Chat from './Work/Content/Chat/Chat';
import Board from './Work/Content/Board/Board';
import Storage from './Work/Content/Storage/Storage';
import { Switch } from '@mui/material';
import DashBoard from './Work/Content/Dashboard/DashBoard';

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
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="video" element={<Video />} />
            <Route path="chat" element={<Chat />} />
            <Route path="calendar" element={<BigCalendar />} />
            <Route path="board" element={<Board />} />
            <Route path="storage" element={<Storage />} />
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
