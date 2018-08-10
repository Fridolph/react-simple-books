import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  margin-bottom: 30px;
  a {
    font-size: 13px;
    color: #999;
    &:hover {
      color: #787878;
    }
    &::after {
      content: '·';
      margin: 0 4px;
    }
  }

  .icp {
    color: #c8c8c8;
    margin-top: 15px;
    font-size: 12px;
    img {
      display: inline-block;
      vertical-align: middle;
    }
  }
`
