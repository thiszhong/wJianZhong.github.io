import React, { Component } from 'react';
import blogListData from '../data/blog/list';
import asyncGetComponent from '../utils/asyncGetComponent'

const stateDefault = {
  title: '哎呀，标题呢o_O',
  category: 'default',
  time: 'o_O'
}

export default class BlogItem extends Component {

  constructor (props) {
    super (props);
    const itemId = props.match.params.id
    const data = blogListData[itemId] || {}
    // 直接获取并设置标题等信息
    this.state = {
      title: data.title,
      category: data.category,
      time: data.time
    }
    // 动态加载内容component
    asyncGetComponent(`blog/items/${itemId}`).then(component => {
      this.setState({
        content: component
      })
    })
  }

  render() {
    const Content = this.state.content
    return (
      <div className="text-center container">
        <h3>{this.state.title || stateDefault.title}</h3>
        <div style={{marginBottom: '20px'}}>
          <span className="text-small" style={styles.tag}>分类：{this.state.category || stateDefault.category}</span>
          <span className="text-small">{this.state.time || stateDefault.time}</span>
        </div>
        <article className="text-large text-indent text-left">
          {
            Content ? <Content /> : null
          }
        </article>
      </div>
    );
  }
}

const styles = {
  tag: {
    marginRight: '20px'
  }
}