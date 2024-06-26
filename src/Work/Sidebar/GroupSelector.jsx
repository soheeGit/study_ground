import React, { useEffect, useState, useRef } from "react";
import "./GroupSelector.css";
const GroupSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [groups, setGroups] = useState([]);
  const dropdownRef = useRef(null);

  /* study데이터 fetch
  useEffect =
    (() => {
      fetch("서버_URL")
        .then((response) => response.json())
        .then((data) => setGroups(data))
        .catch((error) => console.error("Error fetching data:", error));
    },
    []);
  */
  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="group-selector-container">
      <div className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {selectedGroup ? selectedGroup.name : "Select your Group"}
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item">selected</li>
          {groups.map((group) => (
            <li
              key={group.id}
              className="dropdown-item"
              onClick={() => handleGroupChange(group)}
            >
              {group.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GroupSelector;
