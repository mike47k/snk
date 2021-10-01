import './App.css';
import Data from './components/data.json';
import NavBar from './components/navBar.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import CharacterDetail from './components/characterDetail.jsx';
import {useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export default function App() {

  const [charactersInfo, setCharactersInfo] = useState([]);
  useEffect(()=>{
    setCharactersInfo(Data => {
      return Data;
    })
    console.log(charactersInfo);
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
            <CharacterDetail chars={Data}/>
          </Route>
          <Route exact path="/charDetail/:id">
            <CharacterDetail chars={Data}/>
          </Route>
          <Route exact path="/">
            <Home chars={Data}/>
          </Route>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

