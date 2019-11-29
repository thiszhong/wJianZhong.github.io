import React, { Component } from 'react'
import '../../../styles/base.css'

export default class Content extends Component {

  state = {
    url: 'https://baidu.com',
    urlS: 'pinduoduo://com.xunmeng.pinduoduo/duo_coupon_landing.html?goods_id=47270611358&pid=1001496_100022650&customParameters=%7B%22t-v-f-s-p%22%3A%220-0-5-64-openapp_local%22%7D&authDuoId=1031777&cpsSign=CC_191129_1001496_100022650_813620f9be288a4047fb9dd615e910c6&duoduo_type=2',
  }

  render () {
    return (
      <div style={{marginTop: '50px'}}>
        <a href={this.state.urlS}>直接href</a>
        <div style={{marginTop: '20px'}}>
          <button onClick={this.testLocation}>Have a location</button>
        </div>
      </div>
    )
  }

  testLocation = () => {
    window.location.href = this.state.urlS;
    setTimeout(() => {
      alert('gg');
      window.location.href = this.state.url;
    }, 2000)
  }
  
}