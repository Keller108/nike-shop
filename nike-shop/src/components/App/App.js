import './App.scss';
import Header from '../Header/Header';
import mainBanner from '../../images/main-banner.jpg';

function App() {
  return (
    <div className="app">
      <div class="project-container">
        <Header />
        <div className="main-slider">
          <img src={mainBanner} alt="Banner"/>
        </div>
      </div>
    </div>
  );
}

export default App;
