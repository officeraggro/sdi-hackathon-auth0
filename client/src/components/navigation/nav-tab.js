import React from "react";
import { NavLink } from "react-router-dom";

const NavTab = ({ path, label }) => {

    return (
        <>
        <NavLink
            to={path}
            end
            className='nav-bar-link'
            >
                {label}
            </NavLink>
        </>
    )
}

export default NavTab