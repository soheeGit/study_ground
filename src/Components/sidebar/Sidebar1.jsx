import React, { useState } from "react";
import "./Sidebar1.css";
import { Link } from "react-router-dom";
import logo1 from "../images/logo.png";
import SidebarItem from "./SidebarItem1.jsx";
import { IoHomeOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { TiCloudStorageOutline } from "react-icons/ti";
import StudySelect from "./StudySelect.jsx";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (title) => {
    setSelectedItem(title);
  };

  return (
    <div className="sidebar">
      <div className="logoBox">
      <Link to="/#" className="logoLink">
        <img src={logo1} alt="logo" className="logo11" />
        </Link>
      </div>
      <p>Team name</p>
      <StudySelect />
      <Link to="/Dashboard" style={{ textDecoration: "none", color: "black" }}>
        <SidebarItem
          title="Dashboard"
          icon={<IoHomeOutline size={17} />}
          onClick={() => handleClick("Dashboard")}
          isSelected={selectedItem === "Dashboard"}
        />
      </Link>
      <Link to="/Video" style={{ textDecoration: "none", color: "black" }}>
        <SidebarItem
          title="Video"
          icon={<IoVideocamOutline size={17} />}
          onClick={() => handleClick("Video")}
          isSelected={selectedItem === "Video"}
        />
      </Link>
      <Link to="/Chat" style={{ textDecoration: "none", color: "black" }}>
        <SidebarItem
          title="Chat"
          icon={<IoChatbubbleEllipsesOutline size={17} />}
          onClick={() => handleClick("Chat")}
          isSelected={selectedItem === "Chat"}
        />
      </Link>
      <Link to="/work/calendar" style={{ textDecoration: "none", color: "black" }}>
        <SidebarItem
          title="Calendar"
          icon={<IoCalendarOutline size={17} />}
          onClick={() => handleClick("Calendar")}
          isSelected={selectedItem === "Calendar"}
        />
      </Link>
      <Link to="/work/whiteboard" style={{ textDecoration: "none", color: "black" }}>
        <SidebarItem
          title="Board"
          icon={<FaRegListAlt size={17} />}
          onClick={() => handleClick("Board")}
          isSelected={selectedItem === "Board"}
        />
      </Link>
      <Link to="/work/storage" style={{ textDecoration: "none", color: "black" }}>
        <SidebarItem
          title="Storage"
          icon={<TiCloudStorageOutline size={17} />}
          onClick={() => handleClick("Storage")}
          isSelected={selectedItem === "Storage"}
        />
      </Link>
    </div>
  );
};
export default Sidebar;