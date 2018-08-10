import React from 'react'
import {FooterWrapper} from './style'

export default function HomeFooter(props) {
  return (
    <FooterWrapper>
      <p>
        <a href="">关于简书</a>
        <a href="">联系我们</a>
        <a href="">加入我们</a>
        <a href="">简书出版</a>
        <a href="">品牌与徽标</a>
        <a href="">帮助中心</a>
        <a href="">合作伙伴</a>
      </p>

      <p className="icp">
        ©2012-2018 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 <img src="//cdn2.jianshu.io/assets/web/smrz-557fa318122c99a66523209bf9753a27.png" alt=" " width="54" height="30" /> 沪公网安备31010402002252号<img src="//cdn2.jianshu.io/assets/web/wxb-a216456895eb66c17497dbd3da443cf8.png" alt=" " width="60" height="30"/>  举报电话：021-34770013 / <img src="//cdn2.jianshu.io/assets/web/zggsrz-5695587dccf490ca3e651f4228f7479e.png" alt=" " width="25" height="30"/>
      </p>
    </FooterWrapper>
  )
}
