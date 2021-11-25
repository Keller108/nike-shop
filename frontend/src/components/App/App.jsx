import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.scss';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Drawer from '../Drawer/Drawer.jsx';
import Favourites from '../Favourites/Favourites.jsx';

function App() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favourites, setFavourites] = React.useState([]);
  const [items, setItems] = React.useState([]);

  const handleDrawerOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleAddToCart = (obj) => {
    axios.post('https://61822cb784c2020017d89ce5.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onCardDelete = id => {
    axios.delete(`https://61822cb784c2020017d89ce5.mockapi.io/cart/${id}`);
    setCartItems(prev => (prev).filter(item => item.id !== id));
  };

  const handleAddToFavourite = (obj) => {
    axios.post('https://61822cb784c2020017d89ce5.mockapi.io/favourites', obj);
    setFavourites(prev => [...prev, obj]);
  };

  const handleDeleteFromFavourite = obj => {
    axios.delete(`https://61822cb784c2020017d89ce5.mockapi.io/favourites/${obj.id}`);
  }

  React.useEffect(() => {
    axios.get('https://61822cb784c2020017d89ce5.mockapi.io/cart')
            .then((res) => {
              setCartItems(res.data)
            });

    axios.get('https://61822cb784c2020017d89ce5.mockapi.io/favourites')
    .then((res) => {
        setFavourites(res.data);
        console.log(res.data);
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
        <Routes>
          <Route
            exact path="/"
            element={
              <Main
                onPlus={handleAddToCart}
                onCardDelete={onCardDelete}
                setItems={setItems}
                items={items}
                onAddToFavourite={handleAddToFavourite}
                onDeleteFromFavourite={handleDeleteFromFavourite}
              />
            }
            //  
          >
          </Route>
          <Route exact path="/favourites" 
            element={
              <Favourites
                items={favourites}
                onDeleteFromFavourite={handleDeleteFromFavourite}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
