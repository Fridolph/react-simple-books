import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper, Addition, Button, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchList, SearchListItem} from './style'
// import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import * as actions from './redux/actions'

class Header extends PureComponent {
  getListArea = () => {
    const {isFocus, isHover, searchList, page, totalPage, mouseEnter, mouseLeave, changePage} = this.props
    // 将immutable数组 转为一般js数组
    const pageList = []
    for (let  i = (page - 1) * 10; i < page * 10; i++) {
      pageList.push(
        <SearchListItem key={searchList[i]}>{searchList[i]}</SearchListItem>
      )
    }
    return (isFocus || isHover) ? (
      <SearchInfo onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch onClick={() => changePage(page, totalPage)}>
            <i className="iconfont" style={{marginRight: 2, fontSize: 12}}>&#xe6ad;</i>
            换一批
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchList>
          {pageList}
        </SearchList>
      </SearchInfo>
    ) : null
  }

  render() {
    const {isFocus, searchList, inputFocus, inputBlur} = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left" style={{color: '#ea6f5a'}}>首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <SearchWrapper className={isFocus ? 'focus' : ''}>
            <NavSearch
              onFocus={() => inputFocus(searchList)}
              onBlur={inputBlur}
            />
            <i className="iconfont icon--search">&#xe64a;</i>
            {this.getListArea(isFocus)}
          </SearchWrapper>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe600;</i>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapState = state => ({
  isFocus: state.header.isFocus,
  isHover: state.header.isHover,
  searchList: state.header.searchList,
  page: state.header.page,
  totalPage: state.header.totalPage
})

const mapDispatch = dispatch => ({
  inputFocus: searchList => {
    searchList.length === 0 && dispatch(actions.getSearchList())
    dispatch(actions.handleInputFocus())
  },
  inputBlur: () => dispatch(actions.handleInputBlur()),
  mouseEnter: () => dispatch(actions.mouseEnterSearch()),
  mouseLeave: () => dispatch(actions.mouseLeaveSearch()),
  changePage: (page, totalPage) => {
    console.log(page, totalPage)
    if (page < totalPage) {
      dispatch(actions.handleChangePage(page + 1))
    } else {
      dispatch(actions.handleChangePage(1))
    }
  }
})


export default connect(mapState, mapDispatch)(Header)
