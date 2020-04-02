import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Login from 'views/Login/Login';

import './App.css';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Contact = () => (
  <div>
    Contact Page
    <ul>
      <li><Link to="/contact/us">contact us</Link></li>
    </ul>
    <Route path="/contact/us" children={'us'} />
  </div>
);

const Notfound = () => <h1>Not found</h1>

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <p>hello tsx</p>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/404">Notfound</Link>
          </li>
        </ul> */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/" component={Home} /> {/* exact: 精确匹配 */}
          <Route path="/about" children={About} />
          <Route path="/contact" children={Contact} />
          <Route children={Notfound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
