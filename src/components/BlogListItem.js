import React, { Component } from 'react';
import logo from '../img/logo.svg';
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
          <img src={logo} className="blog-category-icon pull-left" alt="mark" />
          <span className="text-middle text-gray">所属分类：{item.category}</span>
          <span className="text-middle text-gray pull-right">{item.time}</span>
        </div>
      </Link>
    )
  }
}