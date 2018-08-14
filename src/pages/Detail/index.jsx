import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {DetailWrapper, AuthorInfo, Content} from './style'
import {actions} from './redux'

class Detail extends PureComponent {
  render() {
    // console.log('router', this.props.match.params.id)
    const {title, content, info} = this.props
    const {name, publishTime, words, readed, comment, like, rewards} = info
    return (
      <DetailWrapper>
        <h1 className="title">{title}</h1>
        <AuthorInfo>
          <a className="avatar">
            <img src="//upload.jianshu.io/users/upload_avatars/5252477/e5357890-570e-4616-a566-d170a02fda01.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt="avatar" />
          </a>
          <div className="info">
            <a className="name">{name}</a>
            <a className="care-btn"><i className="iconfont">&#xe794;</i> 关注</a>
            <div className="meta">
              <span className="publish-time">{publishTime}</span>
              <span className="wordage">字数 {words}</span>
              <span className="views-count">阅读 {readed}</span>
              <span className="comments-count">评论 {comment}</span>
              <span className="likes-count">喜欢 {like}</span>
              {rewards !== '0' ? <span className="rewards-count ">赞赏 {rewards}</span> : null}
            </div>
          </div>
        </AuthorInfo>
        <Content dangerouslySetInnerHTML={{__html: content}} />
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapState = state => ({
  title: state.detail.title,
  info: state.detail.info,
  content: state.detail.content
})

const mapDispatch = dispatch => ({
  getDetail: id => {
    dispatch(actions.getDetail(id))
  }
})

export default connect(mapState, mapDispatch)(withRouter(Detail))
