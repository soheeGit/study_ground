import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Top from './pages/main/screen/Top'; 
import Login from './pages/main/login/Login';
import JoinupForm2 from './pages/main/join/JoinupForm2';
import Test from './pages/main/join/Test';
=======
>>>>>>> 363ecdaea314754618f0b8a590a89ea76684c346
import Top from './Components/Top'; 
import Login from './Components/Login';
import JoinupForm2 from './Components/Join/JoinupForm2';
import PostForm from './Components/Work/Storage/PostForm';
import Submission from './Components/Work/Storage/Submission';
import Storage from './Components/Work/Storage/Storage';
import Test from './Components/Join/Test';
import WhiteBoard from './Components/Work/WhiteBoard';
import PostList1 from './Components/Work/Storage/PostList1';
import File from './Components/Work/Storage/File'
import Calendar from './Components/Work/Calendar'

<<<<<<< HEAD
=======
>>>>>>> origin/feat/work
>>>>>>> 363ecdaea314754618f0b8a590a89ea76684c346

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/login" element={<Login />} />
          <Route path="/JoinupForm" element={<JoinupForm2 />} />
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <Route path="/Test" element={<Test />} />
=======
>>>>>>> 363ecdaea314754618f0b8a590a89ea76684c346
          <Route path="/PostList1" element={<PostList1 />} />
          <Route path="/PostForm" element={<PostForm />} />
          <Route path="/Submission/:id" element={<Submission />} />
          <Route path="/Storage" element={<Storage />} />
          <Route path="/work/storage" element={<Storage />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/work/whiteboard" element={<WhiteBoard />} />
          <Route path="/work/storage/file" element={<File />} />
          <Route path="/work/calendar" element={<Calendar />} />
<<<<<<< HEAD
=======
>>>>>>> origin/feat/work
>>>>>>> 363ecdaea314754618f0b8a590a89ea76684c346
        </Routes>
      </div>
    </Router>
  );
}

export default App;
