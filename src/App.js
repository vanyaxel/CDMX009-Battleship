import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import HomeView from './components/homeView/HomeView';
import Instructions from './components/instructions/Instructions';
import GeneralInfo from './components/General-Info/general-info/GeneralInfo';
import Loser from './components/Loser';
import Winner from './components/Winner';
import GameView from "./components/GameView/GameView";

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" render={() => <HomeView />} />
            <Route path="/instructions" render={() => <Instructions />} />
            <Route path="/winner" render={() => <Winner />} />
            <Route path="/loser" render={() => <Loser />} />
            <Route path="/general-info" render={() => <GeneralInfo />} />
            <Route path='/game' render={() => <GameView />} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
