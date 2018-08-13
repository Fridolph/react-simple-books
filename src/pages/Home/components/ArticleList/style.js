import styled from 'styled-components'


export const ArticleListWrapper = styled.div``

export const ArticleListItem = styled.div`
  position: relative;
  margin: 0 0 15px;
  padding: 10px 145px 10px 0;
  border-bottom: 1px solid #dedede;
  word-wrap: break-word;
  min-height: 140px;

  .img-wrapper {
    position: absolute;
    right: 0;
    top: 30px;
    overflow: hidden;
    border-radius: 4px;
  }
  .item-title {
    font-size: 18px;
    margin-top: 10px;
    line-height: 1.5;
    font-weight: bold;
    margin-bottom: 5px;
    a {
      color: #333;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .item-desc {
    color: #999;
    font-size: 13px;
    line-height: 24px;
    margin-bottom: 8px;
  }
  .item-info {
    color: #b4b4b4;
    font-size: 12px;
    .author {
      margin-right: 10px;
    }
    .comment, .like {
      i, div {
        display: inline-block;
        vertical: middle;
      }
    }
    .comment {
      margin-right: 10px;
      i {transform: translateY(2px);}
    }
    .like {
      i {transform: translateY(1px);}
    }
  }
`

export const ArticleListImageWrapper = styled.div`
  position: relative;
  width: 125px;
  padding-bottom: 100px;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

export const ReadMoreBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: #ccc;
  height: 40px;
  line-height: 40px;
  margin: 30px auto 70px;
  font-size: 15px;
  line-height: 15px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  transition: background 0.4s ease-in-out;
  &.normal {
    &:hover {
      background-color: #a9a9a9;
    }
  }
  &.disabled {
    cursor: not-allowed;
    background: #eee;
    color: #bbb;
  }
`
