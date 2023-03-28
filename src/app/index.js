import { Routes, Route } from 'react-router-dom';

import PasswordRecovery from '../component/PasswordRecovery';
import Authorization from '../component/Authorization';
import Home from '../component/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Authorization />} />
        <Route path="/:id" element={<Authorization />} />
        <Route path="/recover" element={<PasswordRecovery />} />
      </Routes>
    </>
  );
}

export default App;
