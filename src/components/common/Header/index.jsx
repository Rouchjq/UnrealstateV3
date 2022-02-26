import React from "react";
import style from "./index.module.css";
import logo from "../../../assets/images/header/LOGO.svg";

export const Header = () => {
  return (
    <header className={style.menu_principal}>
      <div id="logo" className={style.logo}>
        <img src={logo} alt="logo" />
      </div>

      <div className={style.botones}>
        <button className={style.btn_grande}>Empezar</button>
        <button className={style.btn_lng}>Ing</button>
        <button className={style.btn_lng}>Esp</button>
      </div>
    </header>
  );
};
