import React, { memo } from 'react'
import { FooterWarpper } from './style'
import list from '@/assets/data/footer.json'
const Footer = memo(() => {
  return (
    <FooterWarpper>
      <div className="footer">
        <div className="list">
          {
            list.map((item, index) => {
              return (<div key={index} className='item'>
                <div className='name'>{item.name}</div>
                {
                  item.list.map((items, id) => {
                    return <div key={id} className='items'>{items}</div>
                  })
                }</div>)
            })
          }
        </div>
        <div className="text">
        © 2023 Airbnb, Inc. All rights reserved.·条款·隐私政策·网站地图·全国旅游投诉渠道 12345·违法和不良信息举报邮箱 feiniiao@flyDird.com
        </div>
      </div>
    </FooterWarpper>
  )
})

export default Footer