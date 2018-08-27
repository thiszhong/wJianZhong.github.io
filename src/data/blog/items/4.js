import React, { Component } from 'react';
import '../../../styles/file.css'

export default class Content extends Component {

  render () {
    return (
      <div>
        <div className="zcontainer">
          <div className="zbox">
            <div className="zfile-entry">
              <input ref={this.myRefs} onChange={this.fileChange} id="fileInput" type="file" accept="image/*" multiple className="zinput-file" />
              <button className="zbtn zbtn-file">添加图片</button>
            </div>
          </div>
          <div className="zbox clearfix zff">
            {
              this.state.filesLocal.map((item, index) => (
                <div key={`${item.name}${index}`} className="zfi">
                  <img className="zfp" src={item.uri} title={item.name} alt="" />
                  <div className="zinfo-line">
                    大小：{item.size}
                    <span className="zpr">上传中</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}