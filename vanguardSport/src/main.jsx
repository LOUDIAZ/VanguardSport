import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './Routes/Cart/Cart.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer.jsx';
import { CartProvider } from './context/CartContext.jsx';
import Footer from './components/Footer/Footer.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      {<BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route exact path="/cart" element={
            <>
              <NavBar />
              <Cart />
              <Footer />
            </>} />
          <Route exact path="/category/:categoryId" element={
            <>
              <NavBar />
              <ItemListContainer />
              <Footer />
            </>
          } />
          <Route exact path="/item/:itemId" element={
            <>
              <NavBar />
              <ItemDetailContainer />
              <Footer />
            </>
          } />
          </Routes>
      </BrowserRouter>}
    </CartProvider>
  </React.StrictMode >
)
