import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../routes/Home';
import Login from '../routes/Login';
import Upload from '../routes/Upload';
import Detail from '../routes/Detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/upload' component={Upload} />
        <Route exact path='/detail/:id' component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
