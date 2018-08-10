import styled from 'styled-components'

export const TopicWrapper = styled.div`
overflow: hidden;
border-bottom: 1px solid #dedede;
padding-bottom: 10px;
.topic-more {
  display: inline-block;
  margin: 0 18px 18px 0;
  line-height: 32px;
  height: 32px;
  font-size: 14px;
  overflow: hidden;
  color: #787878;
  cursor: pointer;
}
`

export const TopicItem = styled.div`
display: inline-block;
margin: 0 18px 18px 0;
background: #f7f7f7;
line-height: 32px;
height: 32px;
font-size: 14px;
border: 1px solid #dedede;
border-radius: 4px;
overflow: hidden;
cursor: pointer;
.topic-pic {
  width: 32px;
  height: 32px;
}
img, span {
  display: inline-block;
  vertical-align: middle;
}
span {
  padding: 0 16px 0 6px;
  font-size: 14px;
}
`
