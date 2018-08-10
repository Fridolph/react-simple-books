import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  RecommendWrapper,
  RecommendSwitch,
  RecommendList,
  RecommendItem
} from './style'
import {actions} from '../../redux'

class Recommend extends Component {
  renderRecommend = () => {
    const {recommend, recommendPage} = this.props
    let arr = []
    if (recommend.length > 0) {
      for (let  i = (recommendPage - 1) * 5; i < recommendPage * 5; i++) {
        arr.push(recommend[i])
      }

      return (<RecommendList>
        {arr ? arr.map(item => (<RecommendItem key={item.id}>
          <a href="" className="avatar"><img src={item.avatar_source} alt={item.avatar_name}/></a>
          <div className="info">
            <p className="nickname">{item.nickname}</p>
            <p className="desc">写了{this.formatNumber(item.total_wordage)}字, {this.formatNumber(item.total_likes_count)}喜欢</p>
          </div>
          <a className="care-btn">
            <i className="iconfont">&#xe794;</i>
            关注
          </a>
        </RecommendItem>)) : null}
      </RecommendList>)
    } else {
      return null
    }
  }

  formatNumber = num => {
    return (num / 1000).toFixed(1) + 'k'
  }

  render() {
    const {changeRecommend, recommendPage, recommendTotalPage} = this.props
    return (
      <RecommendWrapper>
        <div className="recommend-header">
          推荐作者
          <RecommendSwitch onClick={() => changeRecommend(recommendPage, recommendTotalPage)}>
            <i className="iconfont" style={{marginRight: 2, fontSize: 12, color: '#969696'}}>&#xe6ad;</i>
            换一批
          </RecommendSwitch>
        </div>

        {this.renderRecommend()}

        <a className="more-btn">查看全部 > </a>
      </RecommendWrapper>
    )
  }

  componentDidMount() {
    this.props.getRecommend()
  }
}

const mapState = state => ({
  recommend: state.home.recommend,
  recommendPage: state.home.recommendPage,
  recommendTotalPage: state.home.recommendTotalPage
})

const mapDispatch = dispatch => ({
  getRecommend: () => dispatch(actions.getRecommend()),
  changeRecommend: (page, totalPage) => {
    console.log(page, totalPage)
    if (page < totalPage) {
      dispatch(actions.changeRecommend(page + 1))
    } else {
      dispatch(actions.changeRecommend(1))
    }
  }
})

export default connect(mapState, mapDispatch)(Recommend)
