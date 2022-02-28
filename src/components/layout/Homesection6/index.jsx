import style from "./index.module.css";
import img1 from "../../../assets/images/homesection6/3.jpg";

export const Homesection6 = () => {
  return (
    <section>
      <div className={style.contenedor_principal}>
        <div className={style.lineUp}></div>
        <h1>NFT’s</h1>
        <div className={style.contenedor_contenido}>
          <button className={style.btn_responsive}>Ver más</button>
          <div className={style.contenedor_contenido_card}>
            <div className={style.card_image}>
              <img src={img1} alt="house" />
            </div>
            <div className={style.card_title}>
              <p>Casa Viva (Barcelona)</p>
            </div>
            <div className={style.card_contend}>
              <p>NFT disponible(s): 10/100</p>
              <p>Precio: ≥1000€</p>
            </div>
          </div>
          <div className={style.contenedor_contenido_text}>
            <h1>Coleccion exclusiva</h1>
            <p>Entra al marketplace</p>
            <p>
              Los NFT de Unrealstate te darán la oportunidad de generar ingresos
              con un sólo clic.
            </p>
            <button>Ver más</button>
          </div>
        </div>
      </div>
    </section>
  );
};
