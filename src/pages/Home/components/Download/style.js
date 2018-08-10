import styled from 'styled-components'

export const DownloadWrapper = styled.div`
  display: flex;
  border: 1px solid #dedede;
  border-radius: 4px;
  background: #fff;
  margin: 17px 0 30px 0;
  padding: 10px 22px;
  width: 100%;
  height: 80px;
  box-sizing: border-box;

  .qrcode {
    width: 60px;
    height: 60px;
  }

  .text {
    margin-left: 10px;
    span {
      display: inline-block;
      margin-top: 10px;
      font-size: 15px;
      color: #333;
    }
    .desc {
      margin-top: 6px;
      font-size: 13px;
      color: #999;
    }
  }
`
