import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import InputMask from 'react-input-mask';

import style from './Authorization.module.scss';

const Authorization = () => {
  const [inputPhone, setInputPhone] = React.useState('');
  const [inputPassword, setInputPassword] = React.useState('');
  const [textLoginError, setTextLoginError] = React.useState('');
  const [textPasswordError, setTextPasswordError] = React.useState('');

  const inputPhoneMask = React.useRef();

  const params = useParams();
  const navigate = useNavigate();

  const onAuthorizationHandler = (e) => {
    e.preventDefault();
    if (inputPhone === localStorage.getItem('login')) {
      if (inputPassword === localStorage.getItem('password')) {
        navigate('/home');
      } else {
        setTextPasswordError('Не верный пароль');
      }
    } else {
      setTextLoginError('Не верный логин');
    }
  };

  const onPhoneHandler = (e) => {
    setTextLoginError('');
    setInputPhone(inputPhoneMask.current?.value);
  };

  const onPasswordHandler = (e) => {
    setTextPasswordError('');
    setInputPassword(e.target.value);
  };

  React.useEffect(() => {
    if (params.id) {
      setInputPhone(params.id);
    }
    localStorage.setItem('login', '+7 111 111 11 11');
    localStorage.setItem('password', '123456');
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.wrapper__logo}>
        <div className={style.wrapper__img}></div>
      </div>
      <div className={style.wrapper__information}>
        <div>
          <span className={style.wrapper__text}>
            {textLoginError ? textLoginError : 'Введите логин'}
          </span>
          {params.id ? (
            <input
              className={style.wrapper__input}
              type="phone"
              onChange={onPhoneHandler}
              value={inputPhone}
            />
          ) : (
            <InputMask
              className={style.wrapper__input}
              mask="+7\ 999 999 99 99"
              ref={inputPhoneMask}
              maskplaceholder={'+7 (***) *** - ** - **'}
              alwaysShowMask={true}
              onChange={onPhoneHandler}
            />
          )}
        </div>
        <div>
          <span className={style.wrapper__text}>
            {textPasswordError ? textPasswordError : 'Введите пароль'}
          </span>
          <input
            className={style.wrapper__input}
            type="password"
            value={inputPassword}
            onChange={onPasswordHandler}
          />
        </div>
      </div>
      <div className={style.wrapper__forgot}>
        <span className={style.wrapper__forgotPassword} onClick={() => navigate('/recover')}>
          Забыли пароль?
        </span>
      </div>
      <div className={style.wrapper__block}>
        <button className={style.wrapper__btn} onClick={onAuthorizationHandler}>
          ВОЙТИ
        </button>
      </div>
    </div>
  );
};

export default Authorization;
