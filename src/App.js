import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './context/ContextProvider';
import CartPage from './pages/CartPage';
import CheckOutPage from './pages/CheckOutPage';


import MainPage from './pages/MainPage';
import StorePage from './pages/StorePage';
import { UserLog } from './pages/UserLog';

function App() {




  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/store'} element={<StorePage />} />
          <Route path={'/cart'} element={<CartPage />} />
          <Route path={'/log'} element={<UserLog />} />
          <Route path={'/checkout'} element={<CheckOutPage />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>


  );
}

export default App;
