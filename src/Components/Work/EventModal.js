import React, { useState } from "react";
import "./EventModal.css";

const EventModal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [selectedColor, setSelectedColor] = useState("#0071c5"); // 색상 선택용 상태 추가

  if (!isOpen) return null;

  const colors = ["#FFB7B7", "#FFF7AC", "#C2D9F4", "#DFF5BA", "#F7323F"]; // 선택할 색상 목록

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const start = new Date(`${startDate}T${startTime}`);
    const end = new Date(`${endDate}T${endTime}`);
    onSave({ title, start, end, color: selectedColor }); // 변경된 selectedColor 사용
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="calandar-modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <form onSubmit={handleSubmit} className="calandar-form">
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="calandaring"
              placeholder="일정 제목"
            />
          </div>
          <div className="color-picker-container">
            <label>Color</label>
            <div className="calendar-color-picker">
              {colors.map((c, index) => (
                <div
                  key={index}
                  className={`calendar-color-option ${c === selectedColor ? 'selected' : ''}`}
                  style={{ backgroundColor: c }}
                  onClick={() => handleColorSelect(c)}
                ></div>
              ))}
            </div>
          </div>
          <div>
            <label>시작일</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              className="calandaring"
            /><br/>
            <label>시작 시간</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
              className="calandaring"
            />
          </div>
          <div>
            <label>종료일</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
              className="calandaring"
            /><br/>
            <label>종료 시간</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
              className="calandaring"
            />
          </div>
          <button type="submit" className="calandar-button">확인</button>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
