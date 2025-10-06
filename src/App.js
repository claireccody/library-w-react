import "./index.css";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo.jsx";
import { books } from "./data.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart.jsx";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => {
        return item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item;
      })
    );
  }

  function removeItem(item) {
    console.log(item);
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItems(){
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    console.log(counter);
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]); //do this when [this] changes

  return (
    <Router>
      <div className="App">
        <script
          src="https://kit.fontawesome.com/ff325f6dbb.js"
          crossOrigin="anonymous"
        ></script>
        <Nav numberOfItems={numberOfItems()}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                books={books}
                cart={cart}
                changeQuantity={changeQuantity}
                removeItem={removeItem}
              />
            }
          />
          {/* <Home /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
