import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import MyContext from './MyContext';
import Home from './views/Home';
import PizzaDetail from './views/PizzaDetail'
import Cart from './views/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './views/NotFound';
import { ProvideContext } from './MyContext';


function App() {
  return (
    <div className="App">
      <ProvideContext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path='/pizza/:id' element={<PizzaDetail />} />
            <Route path='/carrito' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProvideContext>
    </div>
  );
}


export default App;