import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PostList1.css';
import Sidebar from '../../sidebar/Sidebar1';

function PostList() {
  const posts = [
    { id: 1, title: '많이 쓰는 일상 속 대화 표현 찾아오기 30개', date: '2020-10-25', submitted: false, deadline: '2024-05-29 10:00' },
    { id: 2, title: '3월 19일 스터디 주제 찾아오기', date: '2020-10-25', submitted: false, deadline: '2022-05-25 12:00' },
    { id: 3, title: '일주일동안 매일 영어 일기 쓰고 업로드', date: '2020-10-25', submitted: false, deadline: '2022-04-30 18:00'}
  ];
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDeadline = dateTimeString => {
    const dateTime = new Date(dateTimeString);
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const day = String(dateTime.getDate()).padStart(2, '0');
    let hour = dateTime.getHours();
    const minute = String(dateTime.getMinutes()).padStart(2, '0');
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12; // Convert hour from 24-hour to 12-hour format
    const formattedTime = `${hour}:${minute}`;
    return `${year}-${month}-${day} ${ampm} ${formattedTime}`;
  };

  const getDeadlineStatus = deadline => {
    const deadlineTime = new Date(deadline);
    if (deadlineTime > currentTime) {
      return { status: "진행중", className: "ongoing" };
    } else {
      return { status: "종료", className: "ended" };
    }
  };

  return (
    <div>
      <Sidebar />
      <div className='storage-box'>
        <div className='StorageFont'><b>Storage</b></div>
        <div className='Task'>Task</div>
        <div className='Post-Column'>
          <table>
            <thead>
              <tr>
                <th style={{ textAlign:'center' }}>순번</th>
                <th style={{ textAlign:'center' }}>제목</th>
                <th style={{ textAlign:'center' }}>진행</th>
                <th style={{ textAlign:'center' }}>제출</th>
                <th style={{ textAlign:'center' }}>마감일</th>
              </tr>
            </thead>
            <tbody>
              {posts.map(post => {
                const { status, className } = getDeadlineStatus(post.deadline);
                return (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>
                      <Link style={{ textDecorationLine: 'none' }} to={`/Submission/${post.id}`} state={{ title: post.title, deadline: post.deadline }}>
                        {post.title}
                      </Link>
                    </td>
                    <td className={className}>{status}</td>
                    <td>{post.submitted ? '제출' : '미제출'}</td>
                    <td>{formatDeadline(post.deadline)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className='PostButton'>
        <Link to='/PostForm'><button type='submit'>게시물 작성</button></Link>
      </div>
    </div>
  );
}

export default PostList;
