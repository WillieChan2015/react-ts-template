import React from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import Login from 'views/Login/Login';
import Layout from '@/Layout';

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

const Notfound = () => <h1>Not found, <Link to="/">to home</Link></h1>

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {/* <Route exact path="/" /> */}
          <Route path="/404" children={Notfound} />
          <Route path="/"> {/* exact: 精确匹配 */}
            <Layout>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/index">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Redirect from="*" to="/404" />
              </Switch>
            </Layout>
          </Route>
          <Route children={Notfound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
