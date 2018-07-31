import React, { Component } from 'react';
import categoryData from '../data/blog/categories';
import { Link } from "react-router-dom";

export default class BlogListItem extends Component {
  render(){
    const item = this.props.item;

    return (
      <Link to={`/item/${item.id}`} className="blog-list-box margin-vertical">
        <p className="text-large">
          {item.title}
        </p>
        <p className="text-middle text-gray">
          {item.subtitle}
        </p>
        <div className="margin-vertical">
          <i className={`iconfont blog-category-icon ${categoryData[item.category].iconClass}`}></i>
          <span className="text-middle text-gray">所属分类：{item.category}</span>
          <span className="text-middle text-gray pull-right">{item.time}</span>
        </div>
        <div className="text-center blog-list-index">{this.props.index + 1}</div>
      </Link>
    )
  }
}