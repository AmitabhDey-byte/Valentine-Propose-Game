import { Routes, Route } from 'react-router-dom';
import FirstPage from './First-page';
import MainPage from './Main-page';  

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/main-page" element={<MainPage />} />
    </Routes>
  );
}

export default App;
