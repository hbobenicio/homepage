import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Layout from './Layout/Layout'
import './App.css'

import NavBar from './NavBar/NavBar'
import HomePage from './Home/HomePage'
import AboutPage from './About/AboutPage'
import AppsPage from './Apps/AppsPage'

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor: '#e9ecef'}}>
        <BrowserRouter>
          <Layout
            navbar={<NavBar />}>

            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/apps" component={AppsPage} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
