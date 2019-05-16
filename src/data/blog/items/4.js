import React, { Component } from 'react';
import '../../../styles/file.css'

export default class Content extends Component {

  render () {
    return (
      <div>
        <ol>
          <li>Vue cli 3.0 多页应用，当vue.config.js配置pages的数量大于5时，build打包时一直处于building而无法complete。workround：<a href="https://github.com/vuejs/vue-cli/issues/1996#issuecomment-415027750">https://github.com/vuejs/vue-cli/issues/1996#issuecomment-415027750</a></li>  
        </ol>        
      </div>
    )
  }
}