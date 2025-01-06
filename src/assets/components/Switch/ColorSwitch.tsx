import React, { useState } from "react";
import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import "./ColorSwitch.css";

function ColorSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = (checked) => {
    setIsDarkMode(checked);

    if (checked) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div className="container_switch">
      <Switch
        className="switch"
        checked={isDarkMode}
        onChange={handleToggle}
        checkedChildren={<MoonOutlined />} // Ícone de lua
        unCheckedChildren={<SunOutlined />} // Ícone de sol
      />
    </div>
  );
}

export default ColorSwitch;
