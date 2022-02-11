import React from 'react';
import style from './index.module.css';
import logo from '../../../assets/images/header/img1.png';

export const Header = () => {
  return (
    <div className = {style.menu_principal}>
        <div id='logo' className={style.logo}>
            <img src={logo} alt="logo"  />
        </div> 

        <div className={style.botones}>
            <button className={style.btn_grande}>Empezar</button>
            <button className={style.btn_lng}>Ing</button>
            <button className={style.btn_lng}>Esp</button>
        </div>
    </div>
  );
};
