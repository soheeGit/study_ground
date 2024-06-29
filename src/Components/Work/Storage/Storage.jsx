import React from 'react';
import { Link } from 'react-router-dom';
import './Storage.css'; 
import imagebox from '../../images/image 52.png';
import imagebox2 from '../../images/image 53.png';
import imagebox3 from '../../images/image 54.png';
import imagebox4 from '../../images/image 55.png';
import Sidebar from '../../sidebar/Sidebar1'; 

const Storage = () => {
  return (
    <>
      <Sidebar />
      <div className='storage-box'>
        <div className='Storage'><b>Storage</b></div>
        <div className="storage-container">
          <div className="image-box">
            <img className='image-box-img' width="25px" height="25px" src={imagebox} alt="logo" /><p>Image</p>
          </div>
          <Link to="/work/storage/file" className="file-box">
            <img className='image-box-img' width="25px" height="25px" src={imagebox2} alt="logo" /><p>File</p>
          </Link>
        </div>
        
        <div className='storage-container2'>
          <Link to="/PostList1" className="task-box">
            <img className='image-box-img' width="25px" height="25px" src={imagebox3} alt="logo" /><p>Task</p>
          </Link>
          <div className="memo-box">
            <img className='image-box-img' width="25px" height="25px" src={imagebox4} alt="logo" /><p>Memo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Storage;
