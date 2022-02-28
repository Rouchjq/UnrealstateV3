import React from "react";
import style from "./index.module.css";
import logo from "../../../assets/images/header/LOGO.svg";
import Lmobile from "../../../assets/images/header/logo-mobile.png";
export const Header = () => {
  return (
    <header className={style.menu_principal}>
      <div className={style.container}>
        <div id="logo" className={style.logo}>
          <img src={logo} alt="logo" className={style.limg} />
          <img src={Lmobile} alt="logo mobile" className={style.lmobile} />
        </div>

        <div className={style.botones}>
          <button className={style.btn_grande}>Empezar</button>
          <button className={style.btn_lng}>Ing</button>
          <button className={style.btn_lng}>Esp</button>
          <a href="#" className={style.btn_mobile}>
            {" "}
            <i className={`pi pi-bars ${style.btn_icon}`}></i>
          </a>
        </div>
      </div>
    </header>
  );
};
