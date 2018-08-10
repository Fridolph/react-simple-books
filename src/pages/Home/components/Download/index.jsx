import React from 'react'
import {DownloadWrapper} from './style'

export default function Download(props) {
  const {download} = props
  return (
    <DownloadWrapper>
      <img className="qrcode" src={download.imgUrl} alt={download.title} />
      <div className="text">
        <span>{download.title} ></span>
        <div className="desc">{download.content}</div>
      </div>
    </DownloadWrapper>
  )
}

Download.defaultProps = {
  download: {
    imgUrl: '',
    title: '',
    content: ''
  }
}
