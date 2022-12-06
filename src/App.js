import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { Layout } from './components/Layout';

import AppRoutes from './AppRoutes';

import "./css/App.css";

export default class App extends Component {
  render()
  {
    return (
      <Router>
        <Layout>
            <Routes>
              {AppRoutes.map((route, index) => {
                const { element, ...rest } = route;
                return <Route key={index} {...rest} element={element} />
              })}
            </Routes>
        </Layout>
      </Router>
    );
  }
}