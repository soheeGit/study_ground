import React, { useState } from "react";
import "./SidebarItem1.css";

const SidebarItem = ({ title, icon, isSelected, onClick }) => {
  return (
    <div
      className={`sidebarItem ${isSelected ? `selected` : ""}`}
      onClick={onClick}
    >
      <div className="itemIcon">{icon}</div>
      <div className="itemTitle">{title}</div>
    </div>
  );
};

export default SidebarItem;