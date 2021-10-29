import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Drawer from '../Drawer/Drawer';

function App() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="app">
      <div class="project-container">
        <Drawer isOpen={isCartOpen} onCartClose={handleDrawerOpen}/>
        <Header onCartOpen={handleDrawerOpen} />
        <Main />
      </div>
    </div>
  );
}

export default App;
