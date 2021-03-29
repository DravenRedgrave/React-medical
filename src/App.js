import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { NavLink } from './components/NavLink';
import { Data } from './Pages/Data';

function App() {
  return (
    <BrowserRouter>
      <NavLink/>
      <div className="container">
        <Switch>
          <Route path={'/home'} exact component = {Home}/>
          <Route path={'/about'} component = {About}/>
          <Route path={'/data'} component = {Data}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
