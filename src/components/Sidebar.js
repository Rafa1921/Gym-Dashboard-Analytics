import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import Logo from "../imgs/logo.png";
import "./Sidebar.css";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <>
      <motion.div className="sidebar" variants={sidebarVariants}>
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
          <div className="menuItem" onClick={handleLogout}>
            <UilSignOutAlt />
            <span>Logout</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
