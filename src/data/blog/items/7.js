import React, { Component } from 'react';
// import ClipboardJS from 'clipboard'

export default class Content extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount () {
    this.count = 4;
    document.addEventListener('copy', this.clickA);
    window.addEventListener('popstate', this.historyState);
    window.history.pushState({page: 3}, "title 3", "/#/item/7");
  }

  componentWillUnmount () {
    document.removeEventListener('copy', this.clickA);
    window.removeEventListener('popstate', this.historyState)
  }

  clickA = (e) => {
    e.preventDefault();
    alert('你复制了：' + window.getSelection(0).toString() + '，即将打开微信去添加好友')
    this.myRef.current.click()
  }

  historyState = () => {
    if (this.count) {
      window.history.pushState({page: 3}, "title 3", "/#/item/7");
      alert(--this.count + '次')
    }
  }

  render () {
    return (
      <div>
        <p>复制下面文字试试</p>
        <h3 style={{color: 'red'}}>上山打老虎</h3>
        <a style={{display: 'none'}} ref={this.myRef} href="weixin://">打开微信</a>
        {/* <a ref={this.myRef} href="https://baidu.com">打开微信</a> */}
      </div>
    )
  }
  
}