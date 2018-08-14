import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

function Writter(props) {
  if (props.isLogin) {
    return <h1>写文档页面</h1>
  } else {
    return <Redirect to="/login" />
  }
}

const mapState = state => ({
  isLogin: state.login.isLogin
})

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(Writter)
