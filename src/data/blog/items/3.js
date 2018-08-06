import React, { Component } from 'react';
import '../../../styles/file.css'

export default class Content extends Component {

  constructor (props) {
    super (props);
    this.myRefs = React.createRef();
    this.state = {
      filesLocal: [],
      filesUrl: []
    }
  }

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

  fileChange = () => {
    const node = this.myRefs.current
    const files = node.files
    const len = files.length
    const validFiles = []
    
    if (len < 1) return;
    for (let i = 0; i < len; i++) {
      if (this.validFileType(files[i])) validFiles.push(files[i])
    }
    if (validFiles.length > 0) {
      this.setState({
        filesLocal: this.state.filesLocal.concat(validFiles)
      })
    }
    node.value = '';
    console.log(node.value)
  }

  validFileType = (file) => {
    console.log(file)
    if (file.type.indexOf('image') > -1) {
      return true
    }

    return false
  }
}