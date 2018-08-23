import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';
import { Bins } from '../imports/collections/bins';
import MainBins from './components/bins/MainBins';
import BinsList from './components/bins/BinsList';

const routes = (
  <BrowserRouter>
    <div>
      <App />
      <Switch>
        <Route path="/" exact component={BinsList} />
        <Route path="/bins/:binId" component={MainBins} />
      </Switch>
    </div>
  </BrowserRouter>
)

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
})