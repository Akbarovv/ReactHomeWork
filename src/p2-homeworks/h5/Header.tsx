import React from "react";
import {NavLink} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import s from "./Header.module.css"
import {PATH} from "./Routes";

function Header() {

    return (
        <div className={s.navbar}>
            <NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            <NavLink to={PATH.Junior}>Junior</NavLink>
            <NavLink to={PATH.JuniorPlus}>Junior+</NavLink>
        </div>
    )
}

export default Header;
