import React from "react";
import './StyleNav.scss'
import {
    NavLink,
    Link,
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
                <NavLink to="/todo" className={({ isActive }) => (isActive ? "active" : "")}>Todos</NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
                <NavLink to="/user" className={({ isActive }) => (isActive ? "active" : "")}>Users</NavLink>
            </div>
        )
    }
}

export default Nav;