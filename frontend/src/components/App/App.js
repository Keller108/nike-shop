import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Drawer from '../Drawer/Drawer';

function App() {
  return (
    <div className="app">
      <div class="project-container">
        <Drawer />
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
