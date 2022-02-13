import style from './index.module.css';

export const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>
        <div className={style.lineUp}></div>
        <h1>Sé el primero en saber todas las viviendas que se listan!</h1>

        {/* Form */}
        <form className={style.footer_form}>
          <div className={style.form_item}>
            <label htmlFor="name">Email</label>
            <input autocomplete="off" id="name" name="name" type="name" />
          </div>
          <div className={style.form_item}>
            <label htmlFor="email">Correo electronico</label>
            <input autocomplete="off" id="email" name="email" type="email" />
          </div>
          <div className={style.form_button}>
            <button onClick={handleSubmit}>Suscribete</button>
          </div>
        </form>
      </div>
    </footer>
  );
};
//   +7 (916) 123-45-67
