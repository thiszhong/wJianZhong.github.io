import React, { Component } from 'react'
import '../../../styles/base.css'

export default class Content extends Component {

  state = {
    url: 'https://uland.taobao.com/coupon/edetail?e=yG4Eh5FAQewGQASttHIRqZgnwl9Xc1zo%2BtrJjxWNCKIx9fMaIDi1kVPMXZhNmyNvBJjEG0aISc3OULUs67NDzr9fwBwwUiqlt0yP%2FERbUEDdedyFw3M0hsHVq%2Fdxq%2FDATJnbK5InWznd4dRbTb5WN9VqM6BWlz38UtqM5E5JIeWwTqmDXTxmNDtwqbOwZxrv&traceId=0b83515f15400065576721840e&union_lens=lensId:0b0ad4b4_0be0_1668f8b3821_42c3&activityId=7031fb93f07d4621a2fffd96701e8962',
    urlS: 'taobao://uland.taobao.com/coupon/edetail?e=yG4Eh5FAQewGQASttHIRqZgnwl9Xc1zo%2BtrJjxWNCKIx9fMaIDi1kVPMXZhNmyNvBJjEG0aISc3OULUs67NDzr9fwBwwUiqlt0yP%2FERbUEDdedyFw3M0hsHVq%2Fdxq%2FDATJnbK5InWznd4dRbTb5WN9VqM6BWlz38UtqM5E5JIeWwTqmDXTxmNDtwqbOwZxrv&traceId=0b83515f15400065576721840e&union_lens=lensId:0b0ad4b4_0be0_1668f8b3821_42c3&activityId=7031fb93f07d4621a2fffd96701e8962',
  }

  render () {
    return (
      <div>
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