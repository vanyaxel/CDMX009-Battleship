import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';

import HomeView from './components/homeView/HomeView';
import Instructions from './components/instructions/Instructions';
import GeneralInfo from './components/General-Info/general-info/GeneralInfo';
import Loser from './components/Loser';
import Winner from './components/Winner';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" render={() => <HomeView />} />
          <Route path="/instructions" render={() => <Instructions />} />
          <Route path="/winner" render={() => <Winner />} />
          <Route path="/loser" render={() => <Loser />} />
          <Route path="/game" render={() => <GeneralInfo />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
