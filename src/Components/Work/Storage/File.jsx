import React, { useState } from 'react';
import './File.css'; 
import Sidebar from '../../sidebar/Sidebar1'; 

const File = () => {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const data = [
        { name: 'Study Ground', date: '2024-10-20 AM 10:30', type: '워드프로세스 문서', size: '36KB' },
        { name: '24년도 1학기_출석부', date: '2023-04-19 AM 10:30', type: 'Microsoft Excel 워크시트', size: '13KB' },
        { name: '학교 과제', date: '2025-05-11 PM 10:30', type: '한컴오피스 문서', size: '100KB' }
    ];

    return (
    <>
    <Sidebar />
      <div className='Submission-table'>
        <div className='task'>File</div>

        <div className='file-range' style={{ position: 'absolute', top: '14%', right: '10%', transform: 'translate(20%, -10%)' }}>
          <a href="#" onClick={toggleOptions}>정렬 +</a>
            {showOptions && (
              <div className='file-col' style={{ position: 'absolute', top: '100%', right: 0, backgroundColor: '#fff', border: '1px #000', zIndex: 1 }}>
                <div className="file-tag"> <a href="#">이름</a></div>
                <div className="file-tag"> <a href="#">유형</a></div>
                <div className="file-tag"> <a href="#">크기</a></div>
                <div className="file-tag"> <a href="#">오름차순</a></div>
                <div className="file-tag"> <a href="#">내림차순</a></div>
              </div>
            )}
        </div>

        <div className='file-column'>
          <table>
            <thead>
              <tr>
                <th style={{ textAlign:'center', backgroundColor:'#f3f3f3'}}>이름</th>
                <th style={{ textAlign:'center', backgroundColor:'#f3f3f3'}}>수정한 날짜</th>
                <th style={{ textAlign:'center', backgroundColor:'#f3f3f3'}}>유형</th>
                <th style={{ textAlign:'center', backgroundColor:'#f3f3f3'}}>크기</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.type}</td>
                  <td>{item.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
     
      </div>
    </>
  );
};

export default File;
