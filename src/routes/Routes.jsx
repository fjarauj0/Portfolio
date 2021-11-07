import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import Home from '@/pages/Home';
import About from '@/pages/About';
import NotFound from '@/pages/404';
import Projects from '@/pages/Projects';
import Blog from '@/pages/Blog';

export default function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
