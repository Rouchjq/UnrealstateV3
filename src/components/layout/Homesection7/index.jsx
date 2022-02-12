import style from './index.module.css';

export const Homesection7 = () => {
  return (
    <div className={style.contenedor_principal}>
      <div className={style.lineUp}></div>
      <div className={style.titulos}>
        <h1>Roadmap</h1>
      </div>
      <div className={style.contenedor_roadmap}>
        <div className={style.contenedor_roadmap_item}>
          <div className={style.roadmap_item_title}>
            <h1>Fase 1.1</h1>
          </div>
          <div className={style.roadmap_item_content}>
            <ul>
              <li>Desarrollo reproductor 360</li>
              <li>Desarrollo editor</li>
              <li>Desarrollo plug-in</li>
              <li>Creación del Road Map, especificando cada fase.</li>
            </ul>
          </div>
        </div>
        <div className={style.contenedor_roadmap_item}>
          <div className={style.roadmap_item_title}>
            <h1>Fase 1.2</h1>
          </div>
          <div className={style.roadmap_item_content}>
            <ul>
              <li>Diseño landpage</li>
              <li>Diseño plataforma</li>
              <li>Desarrollo algoritmo</li>
            </ul>
          </div>
        </div>
        <div className={style.contenedor_roadmap_item}>
          <div className={style.roadmap_item_title}>
            <h1>Fase 1.2a</h1>
          </div>
          <div className={style.roadmap_item_content}>
            <ul>
              <li>Desarrollo landpage</li>
              <li>
                Video promocional <b>unrealstate</b>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.contenedor_roadmap_item}>
          <div className={style.roadmap_item_title}>
            <h1>Fase 1.3</h1>
          </div>
          <div className={style.roadmap_item_content}>
            <ul>
              <li>
                Apertura <b>UNREALSTATE.ES</b>
              </li>
              <li>Apertura contacto inversores privados</li>
              <li>
                Apertura pack promocional<b> 100 primeros clientes</b>
              </li>
              <li>Desarrollo plataforma Fase 1</li>
            </ul>
          </div>
        </div>
        <div className={style.contenedor_roadmap_item}>
          <div className={style.roadmap_item_title}>
            <h1>Fase 1.3a</h1>
          </div>
          <div className={style.roadmap_item_content}>
            <ul>
              <li>Marketing para inversores y primeros clientes</li>
            </ul>
          </div>
        </div>
        <div className={style.contenedor_roadmap_item}>
          <div className={style.roadmap_item_title}>
            <h1>Fase 1.4</h1>
          </div>
          <div className={style.roadmap_item_content}>
            <ul>
              <li>
                Lanzamiento plataforma <b>UNREALSTATE.ES</b>
              </li>
              <li>Diseño Fase 2</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.contenedor_botones}>
        <button>Fase 1</button>
        <button>Fase 2</button>
        <button>Fase 3</button>
        <button>Fase 4</button>
        <button>Fase 5</button>
        <button>Fase 6</button>
      </div>
    </div>
  );
};
