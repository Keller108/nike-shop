import React from 'react';
import './App.scss';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Drawer from '../Drawer/Drawer.jsx';

function App() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  const handleDrawerOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleAddToCart = (obj) => {
    setCartItems([...cartItems, obj])
  };

  return (
    <div className="app">
      <div className="project-container">
        <Drawer
          isOpen={isCartOpen}
          onCartClose={handleDrawerOpen}
          items={cartItems}
        />
        <Header onCartOpen={handleDrawerOpen} />
        <Main 
          onPlus={handleAddToCart}
        />
      </div>
    </div>
  );
}

export default App;
