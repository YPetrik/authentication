import { Routes, Route } from 'react-router-dom';
import Authorization from '../component/Authorization';
import PasswordRecovery from '../component/PasswordRecovery';
import Home from '../component/Home';

import style from './App.module.scss';

function App() {
  return (
    <div className={style.wrapper}>
      <Routes>
        <Route path="/" element={<Authorization />} />
        <Route path="/:id" element={<Authorization />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recover" element={<PasswordRecovery />} />
      </Routes>
      <Home />
    </div>
  );
}

export default App;

// authentication
