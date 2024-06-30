import React, { useState } from 'react';
import { Routes, Route, Siwtch, useParams } from 'react-router-dom';
import './App.css';
import Work from './pages/work/Work';
import Sidebar from './pages/work/Sidebar/Sidebar';
import Login from './pages/work/Login';
import BigCalendar from './pages/work/Content/Calendar/Calendar';
import Video from './pages/work/Content/Video/Video';
import Chat from './pages/work/Content/Chat/Chat';
import Board from './pages/work/Content/Board/Board';
import Storage from './pages/work/Content/Storage/Storage';
import { Switch } from '@mui/material';
import DashBoard from './pages/work/Content/Dashboard/DashBoard';
import Autho from './pages/Autho';

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
      <Autho />
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
