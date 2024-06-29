<<<<<<< HEAD
// EvaluationModal.js

import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> 6fcfb8b (Initial commit)
import evalimg from "../images/image 102.png"
import "./EvaluationModal.css"

const EvaluationModal = () => {

  return (
    <div className="evaluation-modal">
      <img src={evalimg} alt="addbox Icon" className="icon" />
      <div className="evaluation-text">
        <p>당신의 열정과 끈기로 스터디를 완수하셨습니다. <br />정말 대단해요!
          <br />당신의 앞날을 밝은 미래로 기원합니다.</p>
          <div className='evaluation-button'>
<<<<<<< HEAD
        <button type='submit'>팀원 상호평가 하러가기</button>
      </div>
      </div>

     
=======
        <button type='submit'>팀원 상호평가 하러가기 !!!!</button>
      </div>
      </div>
>>>>>>> 6fcfb8b (Initial commit)
    </div>
  );
};

export default EvaluationModal;
