import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.scss';
import AppContext from '../../utils/context';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Drawer from '../Drawer/Drawer.jsx';
import Favourites from '../Favourites/Favourites.jsx';
import Orders from '../Orders/Orders.jsx';

function App() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favourites, setFavourites] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true)

  const handleDrawerOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleAddToCart = async (obj) => {
    try {
      if (cartItems.find(cardObj => Number(cardObj.id) === Number(obj.id))) {
        axios.delete(`https://61822cb784c2020017d89ce5.mockapi.io/cart/${obj}`);
        setCartItems(prev => prev.filter(item => item.id !== obj.id))
      } else { 
        const { data } = await axios.post('https://61822cb784c2020017d89ce5.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не получилось добавить карточку в корзину')
    }
  };

  const onCardDelete = obj => {
    axios.delete(`https://61822cb784c2020017d89ce5.mockapi.io/cart/${obj.id}`);
    setCartItems(prev => (prev).filter(item => item.id !== obj.id));
  };

  const onDislikeCard = obj => {
    axios.delete(`https://61822cb784c2020017d89ce5.mockapi.io/favourites/${obj.id}`);
    setFavourites(prev => (prev).filter(item => item.id !== obj.id));
  };

  const handleAddToFavourite = async (obj) => {
    try {
      if (favourites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://61822cb784c2020017d89ce5.mockapi.io/favourites/${obj}`);
        setFavourites(prev => (prev).filter(item => item.id !== obj.id));
      } else {
        const {data} = await axios.post('https://61822cb784c2020017d89ce5.mockapi.io/favourites', obj);
        setFavourites(prev => [...prev, data]);
      }
    } catch (err) {
      alert('Не удалось добавить в фавориты');
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some(item => item.id === id);
   };

  const isItemLiked = (id) => {
    return favourites.some(item => item.id === id); 
  };

  // Вызов подгрузки карточек, избранных карточек, и карточек в корзине
  React.useEffect(() => {

    async function fetchData () {
      setIsLoading(true);
      const cartResponse = await axios.get('https://61822cb784c2020017d89ce5.mockapi.io/cart');
      const favouritesResponse = await axios.get('https://61822cb784c2020017d89ce5.mockapi.io/favourites');
      const itemsResponse = await axios.get('https://61822cb784c2020017d89ce5.mockapi.io/items');

      setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavourites(favouritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  },[]);

  return (
    <AppContext.Provider value={{items, cartItems, favourites, isItemAdded, isItemLiked}}>
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
                onDislikeCard={onDislikeCard}
                setItems={setItems}
                items={items}
                onAddToFavourite={handleAddToFavourite}
                cartItems={cartItems}
                isLoading={isLoading}
              />
            }
            //  
          >
          </Route>
          <Route 
            exact path="/favourites" 
            element={
              <Favourites
              onPlus={handleAddToCart}
              onCardDelete={onCardDelete}
              onDislikeCard={onDislikeCard}
              onAddToFavourite={handleAddToFavourite}
              />
            }
          />
          <Route exact path="/orders" 
              element={
                <Orders
                  items={favourites}
                  onAddToFavourite={handleAddToFavourite}
                />
              }
          />
          </Routes>
        </div>
      </div>
    </AppContext.Provider>  
  );
}

export default App;
