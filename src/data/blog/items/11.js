import React, { Component } from 'react'
// import '../../../styles/base.css'

export default class Content extends Component {

  render () {
    return (
      <div>
        <p>-webkit-line-clamp是一个私有的、不在规范内的css属性，当这样使用的时候：</p>
        
        <p style={{color: '#666', margin: 0}}>display: -webkit-box; // 需配合的盒子属性</p>
        <p style={{color: '#666', margin: 0}}>-webkit-line-clamp: 2; // 多少行后再多出时显示...</p>
        <p style={{color: '#666', margin: 0}}>-webkit-box-orient: vertical; // 默认水平，这里设置垂直</p>

        <p>可以达到这样的效果： </p>
        <img src={require('../../../img/11-1.png')} alt="" />
        <p>当然，加上固定height和overflow:hidden;是应该的，否则可能会这样： </p>
        <img src={require('../../../img/11-2.png')} alt="" />
        <p>还可以加个<span style={{color: 'red'}}>word-break: break-all;</span>打断英文什么的。 </p>
        <p>至于看到很多说还要结合<span style={{color: 'red'}}>text-overflow: ellipsis</span>使用，我在chrome下没加也能达到效果的。倒是有这么一句话：</p>
        <p style={{padding: '5px', color: '#666', fontSize: '14px', background: '#f6f6f6'}}>
          "Older (presto-based) versions of the Opera browser have also supported the same effect using the proprietary -o-ellipsis-lastline; value for text-overflow."
        </p>
        <p>是针对老版Opera浏览器的。</p>
        <p>兼容性什么的可以参考：<a href="http://caniuse.com/#search=-webkit-line-clamp">http://caniuse.com/#search=-webkit-line-clamp</a></p>
      </div>
    )
  }
  
}