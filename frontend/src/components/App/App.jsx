import React from 'react';
import axios from 'axios';
import './App.scss';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Drawer from '../Drawer/Drawer.jsx';

function App() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [items, setItems] = React.useState([]);

  const handleDrawerOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleAddToCart = (obj) => {
    axios.post('https://61822cb784c2020017d89ce5.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onCardDelete = evt => {
    // evt.target.parentNode.remove()
    console.log(evt.target)
  };

  React.useEffect(() => {
    axios.get('https://61822cb784c2020017d89ce5.mockapi.io/cart')
            .then((res) => {
              setCartItems(res.data)
            });
  },[]);

  return (
    <div className="app">
      <div className="project-container">
        <Drawer
          isOpen={isCartOpen}
          onCartClose={handleDrawerOpen}
          items={cartItems}
          onCardDelete={onCardDelete}
        />
        <Header onCartOpen={handleDrawerOpen} />
        <Main 
          onPlus={handleAddToCart}
          onCardDelete={onCardDelete}
          setItems={setItems}
          items={items}
        />
      </div>
    </div>
  );
}

export default App;
