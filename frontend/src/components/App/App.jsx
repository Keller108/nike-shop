import React from 'react';
import './App.scss';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Drawer from '../Drawer/Drawer.jsx';

function App() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="app">
      <div className="project-container">
        <Drawer isOpen={isCartOpen} onCartClose={handleDrawerOpen}/>
        <Header onCartOpen={handleDrawerOpen} />
        <Main />
      </div>
    </div>
  );
}

export default App;
