import React, { Component, Fragment } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import Home from './pages/Home'
import Login from './pages/Login'
import Detail from './pages/Detail/loadable'
import Writter from './pages/Writter'
import LayoutHeader from './layouts/Header'
import './style.less'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <LayoutHeader />
            <Fragment>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/detail/:id" exact component={Detail} />
              <Route path="/writter" exact component={Writter} />
            </Fragment>
          </Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
