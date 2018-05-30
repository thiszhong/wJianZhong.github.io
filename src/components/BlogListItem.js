import React, { Component } from 'react';
import logo from '../img/logo.svg';
import { Link } from "react-router-dom";

export default class BlogListItem extends Component {
  render(){
    const item = this.props.item;
    return (
      <Link to="/details" className="blog-list-box margin-vertical">
        <p className="text-main">
          {item.title}
        </p>
        <p className="text-sub">
          {item.subtitle}
        </p>
        <div className="margin-vertical">
          <img src={logo} className="blog-category-icon pull-left" alt="mark" />
          <span className="text-sub">所属分类：{item.category}</span>
          <span className="text-sub pull-right">{item.time}</span>
        </div>
      </Link>
    )
  }
}