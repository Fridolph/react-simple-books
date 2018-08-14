import React, {PureComponent} from 'react'
import {Redirect} from 'react-router-dom'
import {LoginWrapper} from './style'
import {connect} from 'react-redux'
import * as actions from './redux/actions'

class Login extends PureComponent {
  render() {
    const {isLogin} = this.props
    if (!isLogin) {
      return (
        <LoginWrapper>
          <img className="logo" src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt=" " />

          <div className="login-form">
            <div className="normal-title">
              <span className="active">登录</span>
              <b>·</b>
              <span>注册</span>
            </div>
            <div className="form-control">
              <i className="iconfont">&#xe830;</i>
              <input type="text" placeholder="手机号或邮箱" ref={account => this.account = account} />
            </div>
            <div className="form-control">
              <i className="iconfont">&#xe62a;</i>
              <input type="password" placeholder="密码" ref={password => this.password = password} />
            </div>
            <div className="form-control remember">
              <label>
                <input type="checkbox" />记住我
              </label>
              <a>登录遇到问题?</a>
            </div>
            <button className="btn-login" onClick={() => this.props.handleLogin(this.account, this.password)}>登录</button>
            <div className="login-social">
              <h6>社交帐号登录</h6>
              <ul>
                <li>
                  <a className="weibo"><i className="iconfont">&#xe892;</i></a>
                </li>
                <li>
                  <a className="weixin"><i className="iconfont">&#xe65d;</i></a>
                </li>
                <li>
                  <a className="qq"><i className="iconfont">&#xe601;</i></a>
                </li>
                <li>
                  <a className="github"><i className="iconfont">&#xe6a7;</i></a>
                </li>
              </ul>
            </div>
          </div>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}

const mapState = state => ({
  isLogin: state.login.isLogin
})

const mapDispatch = dispatch => ({
  handleLogin: (accountElem, passwordElem) => {
    dispatch(actions.login(accountElem.value, passwordElem.value))
  }
})

export default connect(mapState, mapDispatch)(Login)
