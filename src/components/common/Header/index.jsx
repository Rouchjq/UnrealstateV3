import React from 'react';
import style from './index.module.css';

export const Header = () => {
  return (
    <div className = {style.menu_principal}>
        <div id='logo' className={style.logo}>
            <h1>logo</h1>
        </div> 

        <div className={style.botones}>
            <button className={style.btn_grande}>Empezar</button>
            <button className={style.btn_lng}>Ing</button>
            <button className={style.btn_lng}>Esp</button>
        </div>
    </div>
  );
};
