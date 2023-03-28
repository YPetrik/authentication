import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './Home.module.scss';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={style.wrapper}>
      <span className={style.wrapper__exit} onClick={() => navigate('/')}>Exit</span>
    </div>
  );
};

export default Home;
