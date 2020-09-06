import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';
import Alert from './Alert';
import '../styles/App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/AddProperty" component={AddProperty} />
      </Switch>
    </div>
  );
}

export default App;
