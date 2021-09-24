import './App.css';
import Data from './components/data.json';
import NavBar from './components/navBar.jsx';
import Home from './components/home.jsx';
import Footer from './components/about.jsx';
import CharacterDetail from './components/characterDetail.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Home chars={Data}/>
        <CharacterDetail chars={Data}/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
