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
    padding: 50px 50px 30px;
    margin: 100px auto 0;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
  }
`
