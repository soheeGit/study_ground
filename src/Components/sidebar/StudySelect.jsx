import React from "react";
import "./StudySelect.css";

const StudySelect = () => {
  return (
    <div className="selectBox">
      <select>
        <option value="">Select a study</option>
        <option value="study1">Study 1</option>
        <option value="study2">Study 2</option>
        <option value="study3">Study 3</option>
      </select>
    </div>
  );
};

export default StudySelect;