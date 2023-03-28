import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navlink">
            <NavLink to="/">List</NavLink>
            <NavLink to="/add">Add</NavLink>
            

        </div>
     );
}
 
export default Navbar;