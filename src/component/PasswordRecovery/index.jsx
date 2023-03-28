import React from 'react';
import style from './PasswordRecovery.module.scss';

import { useNavigate } from 'react-router-dom';
import Modal from '../Modal';

const PasswordRecovery = () => {
  const [modal, setModal] = React.useState(false);
  const navigate = useNavigate();

  const closeHandler = () => {
    setModal(false);
    navigate(`/${localStorage.getItem('login')}`);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper__logo}>
        <div className={style.wrapper__img}></div>
      </div>
      <div className={style.wrapper__blockRecover}>
        <span className={style.wrapper__passwordRecovery}>Восстановление пароля</span>
      </div>
      <div className={style.wrapper__information}>
        <div>
          <span className={style.wrapper__text}>Введите номер телефона</span>
          <input
            className={style.wrapper__input}
            value={localStorage.getItem('login')}
            type="text"
          />
        </div>
      </div>
      <div className={style.wrapper__forgot}>
        <span className={style.wrapper__forgotPassword}>назад</span>
      </div>
      <div className={style.wrapper__block}>
        <button className={style.wrapper__btn} onClick={() => setModal(true)}>
          ПОЗВОНИТЬ
        </button>
      </div>
      <Modal shown={modal} close={closeHandler}>
        <span className={style.wrapper__modal}>Ваш новый пароль: 123456</span>
      </Modal>
    </div>
  );
};

export default PasswordRecovery;
