import React from 'react';
import style from './index.module.css';
import img1 from '../../../assets/images/homesection5/img1.png';
import btn1 from  '../../../assets/images/homesection5/btn1.png';
import icon1 from '../../../assets/images/homesection5/icon1.png';
import icon2 from '../../../assets/images/homesection5/icon2.png';
import icon3 from '../../../assets/images/homesection5/icon3.png';
import icon4 from '../../../assets/images/homesection5/icon4.png';




export const Homesection5 = () => {
  return (
    <div className={style.contenedor_principal}>
        
        <div className={style.lineUp}></div>
        <div className={style. text_box}>
            <h1>Crea un tour virtual 360</h1>
            <p>conecta tus inmuebles al mundo. Muestra tus propiedades a través de la plataforma Unrealstate y<br />aumentando tu ratio de conversión, reduce tiempo y costes, vende mas rápido, automatia procesos<br /> formando parte de la mayor red de venta de inmuebles</p>
        </div>

        <div className={style.number_box}>

            <div className={style.numberOne}>
                <h1>74%</h1>
                <p>de los agentes registrados en Unrealstate aseguran utilizar la plataforma <br />para conocer más ofertas de propiedades a nivel nacional</p>
            </div>

            <div className={style.numberTwo}>
                <h1>95%%</h1>
                <p>De los potenciales compradores muestra más interés en propiedades <br />que ofrecen recorridos 360°</p>
            </div>

        </div>

        <div className={style.video_box}>
            <div className={style.img_video}>
                <h1>Imagen y boton</h1>
                {/* <img src={img1} alt="imagen" />
                <img src={btn1} alt="boton" className={style.btn_reproductor} /> */}
            </div>

            <div className={style.btn_funciones}>
                <h1><span>Navega</span>por las <br />principales <br />funcionalidades</h1>

                <div className={style.funciones}>

                    <div className={style.col1}>
                        <div className={style.funcion1}>
                            <h1>Tour Virtual</h1>
                        </div>
                        <div className={style.funcion3}>
                            <h1>Imagenes</h1>
                        </div>
                    </div>

                    <div className={style.col2}>
                        <div className={style.funcion2}>
                            <h1>Video</h1>
                        </div>
                        <div className={style.funcion4}>
                            <h1>Imagenes 360</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </div>
  )
}
