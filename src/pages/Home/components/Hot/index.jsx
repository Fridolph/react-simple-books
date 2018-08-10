import React from 'react'
import {HotWrapper} from './style'

export default function Hot(props) {
  const {hot} = props
  return (
    <HotWrapper className="board">
      {hot && hot.length > 0 ? hot.map(item => (<a key={item.imgUrl}>
        <img src={item.imgUrl} alt={item.imgAlt}/>
      </a>)) : null}
    </HotWrapper>
  )
}

Hot.defaultProps = {
  hot: []
}
