import React from 'react'
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp'
import Start from './components/pages/Start'
import './App.css';

function App() {
  return (
    <div className="body-wrap">
      <Router>
        <Layout>
          <Switch>
          <Route path={'/Start'} component={Start}></Route>
            <Route path={'/SignUp'} component={SignUp}></Route>
            <Route path={'/'} component={Home}></Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
