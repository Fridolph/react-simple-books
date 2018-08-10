import React, {Component} from 'react'
import {connect} from 'react-redux'
import {HomeWrapper, HomeMain, HomeSide} from './style'
import {actions} from './redux'
import Hot from './components/Hot'
import BackTop from './components/BackTop'
import Topic from './components/Topic'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Download from './components/Download'
import Recommend from './components/Recommend'
import ArticleList from './components/ArticleList'

class Home extends Component {
  initApi = () => {
    this.props.getToplicList()
    this.props.getArticleList()
    this.props.getHot()
    this.props.getDownload()
  }

  handleScrollTop = () => {
    window.scrollTo(0, 0)
  }

  bindEvents = () => {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  render() {
    const {topicList, articleList, hot, download, recommend, changeRecommend, showScroll} = this.props
    return (
      <HomeWrapper>
        <HomeMain>
          <Banner />
          <Topic list={topicList} />
          <ArticleList list={articleList}/>
          <Footer />
        </HomeMain>

        <HomeSide>
          <Hot hot={hot} />
          <Download download={download} />
          <Recommend recommend={recommend} changeRecommend={changeRecommend} />
        </HomeSide>

        {showScroll ? <BackTop handleScrollTop={this.handleScrollTop} /> : null}
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.initApi()
    this.bindEvents()
  }
}

const mapState = state => ({
  topicList: state.home.topicList,
  articleList: state.home.articleList,
  hot: state.home.hot,
  download: state.home.download,
  showScroll: state.home.showScroll
})

const mapDispatch = dispatch => ({
  getToplicList: () => dispatch(actions.getTopicList()),
  getArticleList: () => dispatch(actions.getArticleList()),
  getHot: () => dispatch(actions.getHot()),
  getDownload: () => dispatch(actions.getDownload()),
  changeScrollTopShow: () => {
    let scrollTop = document.documentElement.scrollTop
    if (scrollTop > 400) {
      dispatch(actions.showBackTop(true))
    } else {
      dispatch(actions.showBackTop(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home)
