import React from 'react'
import {BackTopWrapper} from './style'

export default function BackTop(props) {
  return (
    <BackTopWrapper onClick={props.handleScrollTop}>
      <i className="iconfont">&#xe669;</i>
    </BackTopWrapper>
  )
}
