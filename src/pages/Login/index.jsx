import React, {PureComponent} from 'react'
import {LoginWrapper} from './style'

export default class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>
        <img className="logo" src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt=" " />

        <div className="login-form">
          <div>登录 注册</div>
          
        </div>
      </LoginWrapper>
    )
  }
}
