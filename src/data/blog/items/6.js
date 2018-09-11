import React, { Component } from 'react';
import ClipboardJS from 'clipboard'

const styles = {
  input: {
    width: '70px'
  }
}

export default class Content extends Component {


  componentDidMount () {
    const clip1 = new ClipboardJS('.btn');
    clip1.on('success', function () { alert('成功') });
    clip1.on('error', function () { alert('失败') });

    const clip3 = new ClipboardJS('#btn3', {
      text: function() {
        return document.getElementById('test3').value;
      }
    });
    clip3.on('success', function () { alert('3-成功') });
    clip3.on('error', function () { alert('3-失败') });

    const clip4 = new ClipboardJS('#btn4', {
      target: function() {
        return document.getElementById('test4');
      }
    });
    clip4.on('success', function () { alert('4-成功') })
    clip4.on('error', function () { alert('4-失败') })
  }

  componentWillUnmount () {
    
  }

  render () {
    return (
      <div>
        <div className="test-group">
          <h4>Test one</h4>
          <div>
            <span>测试内容：1111 </span><button className="btn" data-clipboard-text="1111">复制</button>
          </div>
        </div>

        <div className="test-group">
          <h4>Test two</h4>
          <div>
            <span>测试内容：</span>
            <input id="test2" style={styles.input} defaultValue="2222" />
            <button className="btn" data-clipboard-target="#test2">复制</button>
          </div>
        </div>

        <div className="test-group">
          <h4>Test three</h4>
          <div>
            <span>测试内容：</span>
            <input id="test3" style={styles.input} defaultValue="3333" />
            <button id="btn3">复制</button>
          </div>
        </div>

        <div className="test-group">
          <h4>Test four</h4>
          <div>
            <span>测试内容：</span>
            <input id="test4" style={styles.input} defaultValue="4444" />
            <button id="btn4">复制</button>
          </div>
        </div>
      </div>
    )
  }
  
}