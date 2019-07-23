import React, { Component } from 'react'
// import '../../../styles/base.css'

export default class Content extends Component {

  render () {
    return (
      <div>
        <p>布尔值指代真或假、开或关、是或否。这个类型只要两个值：保留字true和false。</p>
        <p>布尔值通常用于JS的控制结构中，例如 if/else 语句中，那么在 if/else 语句中除了直接的 true/false ，哪些条件值会被转换成 true或false呢？</p>
        <p>在JavaScript的 if() 条件中，下面这些值会被转换成false：</p>
        <ul>
          <li>undefined</li>
          <li>null</li>
          <li>0</li>
          <li>-0</li>
          <li>NaN</li>
          <li>” // 空字符串</li>
        </ul>
        <p>那么所有其他值，包括所有对象（数组）都会转换成true。</p>
      </div>
    )
  }
  
}