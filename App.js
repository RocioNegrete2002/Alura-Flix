import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NuevoVideo from './pages/NuevoVideo';
import EditarVideo from './pages/EditarVideo';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/nuevo" component={NuevoVideo} />
        <Route path="/editar/:id" component={EditarVideo} />
      </Switch>
    </Router>
  );
}

export default App;
