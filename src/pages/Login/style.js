import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(241,241,241);

  .logo {
    position: absolute;
    left: 50px;
    top: 55px;
    width: 100px;
    height: 46px;
  }

  .login-form {
    width: 400px;
    padding: 50px 50px;
    margin: 100px auto 0;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    .normal-title {
      margin: 0 auto 50px;
      padding: 10px;
      font-weight: 400;
      color: #969696;
      text-align: center;
      span {
        padding: 10px;
        color: #969696;
        font-size: 18px;
      }
      b {padding: 10px;font-weight: bold;}
      .active {
        font-weight: bold;
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
      }
    }
    .form-control {
      position: relative;
      .iconfont {
        position: absolute;
        left: 12px;
        top: 16px;
        color: #969696;
      }
      input {
        box-sizing: border-box;
        background: #f8f8f8;
        border: 1px solid #c8c8c8;
        height: 50px;
        width: 300px;
        line-height: 40px;
        font-size: 13px;
        padding: 4px 12px 4px 35px;
        outline: none;
        ::-webkit-input-placeholder,
        ::-ms-input-placeholder,
        ::-moz-placeholder {
          color: #a8a8a8;
        }
      }
      input[type=text] {
        border-radius: 4px 4px 0 0;
        border-bottom: 0;
      }
      input[type=password] {
        border-radius: 0 0 4px 4px;
      }
    }
    .remember {
      margin: 20px 0;
      font-size: 14px;
      overflow: hidden;
      input[type=checkbox] {
        width: 13px;
        height: 13px;
        display: inline-block;
      }
      a {float: right;}
    }
    .btn-login {
      width: 100%;
      font-size: 18px;
      background-color: #3194d0;
      border-radius: 24px;
      outline:none;
      border:none;
      color: #fff;
      line-height: 42px;
      cursor: pointer;
      transition: background 0.3s ease-in;
      &:hover {
        background-color: #187cb7;
      }
    }
    .login-social {
      margin-top: 40px;
      h6 {
        position: relative;
        margin-bottom: 10px;
        font-size: 12px;
        color: #b5b5b5;
        text-align:center;
        &::before,
        &::after {
          content: '';
          border-top: 1px solid #b5b5b5;
          position:absolute;
          width: 60px;
          top: 5px;
        }
        &::before { left: 30px; }
        &::after { right: 30px; }
      }
      ul {
        display: flex;
        margin-top: 30px;
        padding: 0 15px;
        justify-content: space-around;
        li {
          flex: 0 0 25%;
          text-align:center;
          .weibo {
            color: #e05244;
            .iconfont {font-size: 28px;}
          }
          .weixin {
            color: #00bb29;
            .iconfont {font-size: 29px;}
          }
          .qq {
            color: #498ad5;
            .iconfont {font-size: 26px;}
          }
          .github {
            color: #333;
            .iconfont {font-size: 27px;}
          }
        }
      }
    }
  }
`
