import React, {Component} from 'react'
import {Carousel} from 'antd'
import {BannerWrapper} from './style'

export default class Banner extends Component {
  render() {
    return (
      <BannerWrapper>
        <Carousel autoplay>
          <div>
            <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4361/599ae85090db0f4a4cb3cca4d7aeb645f6cc91f0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner" />
          </div>
          <div>
            <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4376/19751f4535989cd62afaf108e33df776fcaeae98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner" />
          </div>
          <div>
            <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4355/90aa72980ef59c6cb49f851edc095329fb695a92.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner" />
          </div>
          <div>
            <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4379/0d07d691d87f6427500535bd0e97c08ce05f603c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner" />
          </div>
        </Carousel>
      </BannerWrapper>
    )
  }
}
