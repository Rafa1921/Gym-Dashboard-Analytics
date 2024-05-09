import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            GY<span>M</span>REPS
          </span>
        </div>
        <div className="menu">
          {SidebarData.map((item, index) => (
            <Link
              to={item.path}
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <div className="">
                <item.icon />
                <span>{item.heading}</span>
              </div>
            </Link>
          ))}
          {/* signoutIcon */}
          <div className=""></div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
