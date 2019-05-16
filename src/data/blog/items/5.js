import React, { Component } from 'react';
import '../../../styles/file.css'

export default class Content extends Component {

  constructor (props) {
    super (props);
    this.state = {
      retUrl: '',
      retInput: ''
    }
  }

  timer = null;

  componentDidMount () {
    this.setState({
      retUrl: JSON.stringify(this.paramsTransform(window.location.href))
    })
  }

  componentWillUnmount () {
    if (this.timer) clearTimeout(this.timer)
  }

  render () {
    return (
      <div>
        <p>当前页面url参数：{this.state.retUrl}</p>
        <input onKeyUp={this.transform} style={{width: '90%', marginLeft: '32px'}} type="text" placeholder="输入url进行测试" />
        {/* <button onClick={this.transform} type="button">测试</button> */}
        <p>测试结果：{this.state.retInput}</p>
        <h4>代码：<a target="_blank" rel="noopener noreferrer" href="https://github.com/thiszhong/utils/blob/master/Javascript/formatTransform.js">https://github.com/thiszhong/utils/blob/master/Javascript/formatTransform.js</a></h4>
      </div>
    )
  }

  transform = (e) => {
    const val = e.target.value;
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({
        retInput: JSON.stringify(this.paramsTransform(val))
      })
    }, 500)
  }

  /**
   * 将url的所有参数输出为一个对象
   * @param {String} url decode之后的url
   */
  paramsTransform (url) {
    let obj = {};
    let arr;
    let paramPart;
    if (!url || typeof url !== 'string') return obj;
    paramPart = url.indexOf('?') > -1 ? url.substring(url.indexOf('?') + 1) : url;
    arr = paramPart.split('&');
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i].indexOf('=') > -1) {
        arr[arr[i]] = arr[i].split('=');
        obj[arr[arr[i]][0]] = arr[arr[i]][1]
      }
    }
    return obj
  }
  
}