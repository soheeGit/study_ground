import React from "react";
import leftkeyicon from "../images/leftkey.png";
import rightkeyicon from "../images/rightkey.png";

const Toolbar = (props) => {
  const { date } = props;

  const navigate = (action) => {
    props.onNavigate(action);
  };

  return (
    <div className="rbc-toolbar">
      <span className="rbc-toolbar-label">{`${date.getFullYear()}년 ${date.getMonth() + 1}월`}</span>
      <span className="rbc-btn-group">
        <button type="button" onClick={navigate.bind(null, "TODAY")}>
          오늘
        </button>
        <button type="button" onClick={navigate.bind(null, "PREV")}>
          <img src={leftkeyicon} alt="Left Icon" className="icon" width="28px" />
        </button>
        <button type="button" onClick={navigate.bind(null, "NEXT")}>
          <img src={rightkeyicon} alt="Right Icon" className="icon" width="28px" />
        </button>
      </span>
    </div>
  );
};

export default Toolbar;
