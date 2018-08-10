import React, { Component, Fragment } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import Home from './pages/Home'
import Detail from './pages/Detail'
import LayoutHeader from './layouts/Header'
import './style.less'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <LayoutHeader />
          <BrowserRouter>
            <Fragment>
              <Route path="/" exact component={Home} />
              <Route path="/detail" exact component={Detail} />
            </Fragment>
          </BrowserRouter>
        </Fragment>
      </Provider>
    )
  }
}

export default App
