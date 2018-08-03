import React, {Component, Fragment} from 'react'
import {CSSTransition} from 'react-transition-group'

export default class Anime extends Component {
  render() {
    return (
      <Fragment>
        <CSSTransition
          in={this.state.toggle}
          classNames="fade"
          unmountOnExit
          onEntered={el => {el.style.color = 'blue'}}
          appear={true}
          timeout={1000}>
          <h1>hello</h1>
        </CSSTransition>
        <button onClick={() => this.handleToggle()}>toggle</button>
      </Fragment>
    )
  }
}
