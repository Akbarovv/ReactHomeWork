import React from "react";
import {NavLink} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import s from "./Header.module.css"
import {PATH} from "./Routes";

function Header() {

    return (
        <div className={s.navbar}>
            <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.light}>PreJunior</NavLink>
            <NavLink to={PATH.Junior} activeClassName={s.light}>Junior</NavLink>
            <NavLink to={PATH.JuniorPlus} activeClassName={s.light}>Junior+</NavLink>
        </div>
    )
}

export default Header;
