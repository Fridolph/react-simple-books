import styled from 'styled-components'
import logoPic from '../../assets/img/logo.png'

export const HeaderWrapper = styled.header`
  height: 59px;
  background: #fff;
  border-bottom: 1px solid #eee;
  position: relative;
`

export const Logo = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height 59px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 230px 0 150px;
  overflow: hidden;
`

export const NavItem = styled.div`
  line-height: 59px;
  padding: 0 15px;
  color: #333;

  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  box-sizing: border-box;
  margin-top: 11px;
  margin-left: 20px;
  padding: 0 40px 0 15px;
  width: 120px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 24px;
  background: #eee;
  font-size: 14px;
  transition: width 0.4s ease-in;
  &::placeholder {
    color: #999;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;

  .icon--search {
    position: absolute;
    right: 7px;
    top: 17px;
    width: 26px;
    height: 26px;
    line-height: 26px;
    border-radius: 50%;
    text-align: center;
    transition: all 0.3s ease-in;
    cursor: pointer;
  }
  &.focus {
    .icon--search {
      background: #999;
      color: #fff;
    }
    input {
      width: 240px;
    }
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 60px;
  width: 250px;
  padding: 20px 20px 10px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
`

export const SearchInfoTitle = styled.div`
  margin: 0 0 15px 0;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 12px;
  cursor: pointer;
`

export const SearchList = styled.div`
  overflow: hidden;
`

export const SearchListItem = styled.a`
  display: inline-block;
  margin: 0 10px 10px 0;
  font-size: 12px;
  padding: 0 5px;
  line-height: 20px;
  coloe: #333;
  border: 1px solid #dedede;
  border-radius: 3px;
`


export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 59px;
`

export const Button = styled.div`
  float: right;
  margin-top: 12px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 34px;
  border-radius: 24px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`
