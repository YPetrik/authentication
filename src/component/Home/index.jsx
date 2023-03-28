import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './Home.module.scss';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className={style.wrapper} onClick={() => navigate('/')}>
        click on exit
      </button>
    </>
  );
};

export default Home;
