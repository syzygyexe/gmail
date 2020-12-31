import React from "react";
import "./SidebarOption.css";

// Icon, title, number are used inside of the Sibedar.js >>> SidebarOption
function SidebarOption({ Icon, title, number, selected }) {
  return (
    <div className={`sidebarOption ${selected && "sidebarOption-active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
