import './App.css';
import {useEffect, useState} from 'react';
import Data from './components/data.json';
import NavBar from './components/navBar.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import CharacterDetail from './components/characterDetail.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  const [charactersInfo, setCharactersInfo] = useState(Data);
  useEffect(()=>{
    setCharactersInfo(Data);
    // no setea
    
  },[])

  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      
      <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route exact path="/charDetail">
            <CharacterDetail chars={charactersInfo}/>
          </Route>
          <Route exact path="/charDetail/:id">
            <CharacterDetail chars={charactersInfo}/>
          </Route>
          <Route exact path="/">
            <Home chars={charactersInfo}/>
          </Route>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

