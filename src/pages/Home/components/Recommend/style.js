import styled from 'styled-components'

export const RecommendWrapper = styled.div`
  .recommend-header {
    color: #969696;
    font-size: 14px;
    margin-bottom: 15px;
    position: relative;
  }

  .more-btn {
    display: block;
    font-size: 13px;
    line-height: 34px;
    color: #787878;
    border: 1px solid #dedede;
    border-radius: 4px;
    text-align: center;
    background: #f7f7f7;
    cursor: pointer;
  }
`

export const RecommendSwitch = styled.a`
  font-size: 13px;
  cursor: pointer;
  color: #969696;
  position:absolute;
  right: 18px;
`

export const RecommendList = styled.ul`

`

export const RecommendItem = styled.li`
  display: flex;
  margin-bottom: 15px;
  .avatar {
    flex: 0 0 50px;
    img {
      width: 48px;
      height: 48px;
      border: 1px solid #dedede;
      border-radius: 50%;
    }
  }
  .info {
    flex: 0 0 160px;
    margin-left: 10px;
    .nickname {
      padding-top: 5px;
      font-size: 14px;
      margin-bottom: 5px;
    }
    .desc {
      font-size: 12px;
      color: #969696;
    }
  }
  .care-btn {
    padding-top: 5px;
    font-size: 13px;
    color: #42c02e;
    cursor: pointer;
    .iconfont {
      color: #42c02e;
      font-weight: bold;
    }
  }
`
