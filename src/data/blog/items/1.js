import React, { Component } from 'react';

export default class Content extends Component {
  render () {
    return (
      <div>
        <h2>一 兼容性</h2>
        <p>兼容PC+手机端，Chrome 42+、Edge 12+、Firefox 41+、IE、Opera 29+、Safari 10+，PC支持复制图片，手机端友好交互。其中：</p>
        <p>- clipboard.js:</p>
        <img src="https://img-blog.csdn.net/20170827135040472?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvRG9EaWxpZ2VudGx5/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt="" />
        <p>- window.clipboardData 兼容IE </p>
        <p>- 友好型补充（主要针对移动端） </p>
        <h2>二 整体思路</h2>
        <p>最近做了一个需要 <strong>一键复制</strong> 功能的网站，也是经历了一番挣扎，下面给出自己的一些总结，欢迎大家补充。</p>
        <ul>
          <li>ZeroClipboard.js虽然兼容性较好，但需要Flash，本文不考虑。如不在意flash可以尝试</li>
          <li>本文主体clipboard.js</li>
          <li>针对不兼容的IE版本尝试使用window.clipboardData</li>
          <li>交互友好型补充方案（主要针对移动端）试</li>
        </ul>

        <p>具体使用：<a href="https://blog.csdn.net/DoDiligently/article/details/77621467">https://blog.csdn.net/DoDiligently/article/details/77621467</a></p>
      </div>
    )
  }
}