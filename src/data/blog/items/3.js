import React, { Component } from 'react';
import '../../../styles/file.css'

export default class Content extends Component {
  render () {
    return (
      <div>
        <div className="zcontainer">
          <div className="zbox">
            <div className="zfile-entry">
              <input id="fileInput" type="file" className="zinput-file" />
              <button className="zbtn zbtn-file">添加图片</button>
            </div>
          </div>
          <div className="zbox clearfix zff">
            <div className="zfi">
              <img className="zfp" src="https://img.alicdn.com/bao/uploaded/i3/3905914331/TB2VDbawb5YBuNjSspoXXbeNFXa_!!3905914331-0-item_pic.jpg_200x200.jpg" alt="" />
            </div>
            <div className="zfi">
              <img className="zfp" src="https://img.alicdn.com/bao/uploaded/i3/3905914331/TB2VDbawb5YBuNjSspoXXbeNFXa_!!3905914331-0-item_pic.jpg_200x200.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}