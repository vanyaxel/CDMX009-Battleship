import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';

import HomeView from './components/homeView/HomeView';
import Instructions from './components/instructions/Instructions';
import UserInfo from './components/UserInfo';
import Board from './components/board/Board';
import Loser from './components/Loser';
import Winner from './components/Winner';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" render={() => <HomeView />} />
          <Route path="/instructions" render={() => <Instructions />} />
          <Route path="/user-info" render={() => <UserInfo />} />
          <Route path="/board" render={() => <Board />} />
          <Route path="/winner" render={() => <Winner />} />
          <Route path="/loser" render={() => <Loser />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
