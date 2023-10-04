import React from "react";
import "./Navbar.css";
import { MdOutlineAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <ul className="navbar">
          <li>
            <h1>Todo List</h1>
          </li>
          <li>
            <Link to="/tasks/create">
              <MdOutlineAdd className="add-btn-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
