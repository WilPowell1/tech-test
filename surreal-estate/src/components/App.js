import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';
import '../styles/App.css';

const App = () => {
  const [userID, setUserId] = useState("");

  const handleLogin = (res) => {
    setUserId(res.id);
  };

  const handleLogout = () => {
    window.FB.logout();
    setUserId("");
  };

  return (
    <div>
      <NavBar onLogin={handleLogin} onLogout={handleLogout} userID={userID} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Properties {...props} userID={userID} />}
        />
        <Route exact path="/AddProperty" component={AddProperty} />
      </Switch>
    </div>
  );
};

export default App;
