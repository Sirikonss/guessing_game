import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Stagegame from "./Stagegame";
import AddStage from "./AddStage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App}></Route>
      <Route path="/create" exact component={AddStage}></Route>
      <Route path="/play/:stageId" component={Stagegame}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
