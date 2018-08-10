import React from 'react'
import {TopicWrapper, TopicItem} from './style'

export default function Topic(props) {
  const {list} = props
  return (
    <TopicWrapper>
      {
        list.map(item => (<TopicItem key={item.id}>
          <img className="topic-pic" src={item.imgUrl} alt={item.title} />
          <span>{item.title}</span>
        </TopicItem>))
      }
      <div className="topic-more">更多热门话题 ></div>
    </TopicWrapper>
  )
}
