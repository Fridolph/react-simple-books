import React, {PureComponent, Fragment} from 'react'
import {connect} from 'react-redux'
import {actions} from '../../redux'
import {Link} from 'react-router-dom'
import {ArticleListWrapper, ArticleListItem, ArticleListImageWrapper, ReadMoreBtn} from './style'
import {Icon} from 'antd'

class ArticleList extends PureComponent {
  renderList = () => {
    const { list, artPage } = this.props
    let arr = list.slice(0, artPage * 20)
    let render = arr.map(item => {
      let arr = item.info.replace(/\s+/g, ' ').split(' ')
      let author = arr[0]
      let comment = arr[1]
      let like = arr[2]

      return  (
        <ArticleListItem key={item.title}>
          <h2 className="item-title">
            <Link to={`/detail/${item.id}`}>{item.title}</Link>
          </h2>
          <p className="item-desc">{item.summary}</p>
          <div className="item-info">
            <span className="author">{author}</span>
            <span className="comment">
              <i className="iconfont">&#xe684;</i>
              <div>{comment}</div>
            </span>
            <span className="like">
              <i className="iconfont">&#xe640;</i>
              <div>{like}</div>
            </span>
          </div>
          {item.imgUrl ? (<ArticleListImageWrapper className="img-wrapper">
            <a href={item.imghref}>
              <img src={item.imgUrl} alt={item.imgDesc} />
            </a>
          </ArticleListImageWrapper>) : null}
        </ArticleListItem>
      )
    })

    return render
  }

  renderReadBtn = () => {
    const {isLoad, artPage, artTotalPage, hasMore, getMore} = this.props
    let dom = null
    if (hasMore) {
      dom =  (<ReadMoreBtn className="load-more normal" onClick={() => getMore(artPage, artTotalPage, hasMore)}>
        {isLoad ? <Icon type="loading" /> : <span>阅读更多</span>}
      </ReadMoreBtn>)
    } else {
      dom =  (<ReadMoreBtn className="load-more disabled">
        <span>暂无更多内容</span>
      </ReadMoreBtn>)
    }
    return dom
  }

  render() {
    return (
      <Fragment>
        <ArticleListWrapper>
          {this.renderList()}
        </ArticleListWrapper>

        {this.renderReadBtn()}
      </Fragment>
    )
  }
}

const mapState = state => ({
  isLoad: state.home.isLoad,
  hasMore: state.home.hasMore,
  artPage: state.home.artPage,
  artTotalPage: state.home.artTotalPage
})

const mapDispatch = dispatch => ({
  getMore: (artPage, artTotalPage, hasMore) => {
    if (artPage < artTotalPage) {
      dispatch(actions.getMoreArticleList(artPage + 1, artTotalPage))
    } else {
      if (hasMore) {
        dispatch(actions.changeLoadmore(false))
      }
    }
  }
})

export default connect(mapState, mapDispatch)(ArticleList)
