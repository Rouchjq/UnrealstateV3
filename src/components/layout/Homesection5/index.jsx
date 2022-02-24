import React from "react";
import style from "./index.module.css";
import img1 from "../../../assets/images/homesection5/img1.png";
import btn1 from "../../../assets/images/homesection5/btn1.png";
import icon1 from "../../../assets/images/homesection5/icon1.png";
import icon2 from "../../../assets/images/homesection5/icon2.png";
import icon3 from "../../../assets/images/homesection5/icon3.png";
import icon4 from "../../../assets/images/homesection5/icon4.png";
import { Homesection6 } from "../Homesection6";

export const Homesection5 = () => {
  return (
    <section className={style.contenedor_principal}>
      <div className={style.lineUp}></div>
      <div className={style.text_box}>
        <h1>Crea un tour virtual 360</h1>
        <p>
          Conecta tus inmuebles al mundo. Muestra tus propiedades a través de la
          plataforma Unrealstate y aumentando tu ratio de conversión, reduce
          tiempo y costes, vende mas rápido, automatiza procesos formando parte
          de la mayor red de venta de inmuebles
        </p>
      </div>

      <div className={style.number_box}>
        <div className={style.numberOne}>
          <h1>74%</h1>
          <p>
            de los agentes registrados en Unrealstate aseguran utilizar la
            plataforma <br />
            para conocer más ofertas de propiedades a nivel nacional
          </p>
        </div>

        <div className={style.numberTwo}>
          <h1>95%</h1>
          <p>
            De los potenciales compradores muestra más interés en propiedades{" "}
            <br />
            que ofrecen recorridos 360°
          </p>
        </div>
      </div>

      <div className={style.video_box}>
        <div className={style.img_video}>
          {/* Pluguin de video */}
          <video
            id="my-player"
            class="video-js"
            controls
            preload="auto"
            poster="//vjs.zencdn.net/v/oceans.png"
            data-setup="{}"
          >
            <source
              src="//vjs.zencdn.net/v/oceans.mp4"
              type="video/mp4"
            ></source>
            <source
              src="//vjs.zencdn.net/v/oceans.webm"
              type="video/webm"
            ></source>
            <source
              src="//vjs.zencdn.net/v/oceans.ogv"
              type="video/ogg"
            ></source>
            <p class="vjs-no-js">
              To view this video please enable JavaScript, and consider
              upgrading to a web browser that
              <a
                href="https://videojs.com/html5-video-support/"
                target="_blank"
                rel="noreferrer"
              >
                supports HTML5 video
              </a>
            </p>
          </video>
          {/* <img src={img1} alt="imagen" className={style.view} />
          <img src={btn1} alt="boton" className={style.btn_reproductor1} />
          <img src={btn1} alt="boton" className={style.btn_reproductor2} />
          <img src={btn1} alt="boton" className={style.btn_reproductor3} /> */}
        </div>

        <div className={style.btn_funciones}>
          <div className={style.titulo}>
            <h1>
              <span>Navega</span> por las
            </h1>
            <h1>principales</h1>
            <h1>funcionalidades</h1>
          </div>

          <div className="grid ">
            <div className={`col-4 col-offset-1 my-3 ${style.box_img}`}>
              <img src={icon1} alt="Tour Virtual" />
            </div>

            <div className={`col-4 col-offset-1 my-3 ${style.box_img}`}>
              <img src={icon3} alt="Imgenes" />
            </div>

            <div className={`col-4 col-offset-1 my-3 ${style.box_img}`}>
              <img src={icon2} alt="Video" className={style.video} />
            </div>

            <div className={`col-4 col-offset-1 my-3 ${style.box_img}`}>
              <img src={icon4} alt="Video 360" />
            </div>
          </div>
        </div>
      </div>

      <Homesection6 />
    </section>
  );
};
