import styled from 'styled-components'

export const DetailWrapper = styled.div`
  width: 620px;
  margin: 0 auto;
  padding: 20px 0 50px 0;

  h1 {
    margin: 40px 0 0 0;
    line-height: 44px;
    font-size: 34px;
    color: #333;
    font-weight: bold;
  }
`

export const AuthorInfo = styled.div`
  margin: 30px 0 40px;
  display: flex;
  .avatar {
    display: inline-block;
    overflow: hidden;
    width: 48px;
    height: 48px;
    border: 1px solid #dedede;
    border-radius: 50%;
    transform: translateY(-4px);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    width: calc(100% - 63px);
    margin-left: 10px;
    .name {
      font-size: 16px;
      color: #333;
      margin-right: 6px;
    }
    .care-btn {
      display: inline-block;
      padding: 0 5px;
      line-height: 18px;
      height: 18px;
      border-radius: 16px;
      color: #fff;
      cursor: pointer;
      font-size: 12px;
      background-color: #42c02e;
      .iconfont {
        color: #fff;
        font-size: 13px;
        font-weight: bold;
      }
    }
    .meta {
      color: #969696;
      margin-top: 6px;
      span {
        font-size: 12px;
        margin-right: 6px;
      }
    }
  }
`

export const Content = styled.div`
  b {font-weight: bold;}
  p {
    color: #333;
    font-size: 16px;
    line-height: 1.7;
    margin-bottom: 25px;
    word-break: break-word;
  }

  .img-wrapper {
    margin-bottom: 20px;
    img {
      width: 100%;
    }
    .img-caption {
      display: inline-block;
      padding: 10px;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      border-bottom: 1px solid #ddd;
      font-size: 14px;
      color: #969696;
    }
  }
`
