import React, { Component } from 'react';

import '../styles/emoji.css'

const emojiPath = '/blog/emoji/'
const emojiExtemsion = '.png'
const emojis = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '难过', '嘿哈', '捂脸', '奸笑', '机智', '皱眉', '耶', '红包', '鸡', '调皮', '呲牙', '惊讶', '囧', '抓狂', '吐', '偷笑', '愉快', '白眼', '傲慢', '困', 'OK', '爱心', '抱拳', '悲伤', '鄙视', '便便', '菜刀', '勾引', '凋谢', '奋斗', '发抖', '不屑', '高兴', '擦汗', '蛋糕', '鼓掌', '鬼脸', '哈欠', '憨笑', '合十', '坏笑', '加油', '惊恐', '咖啡', '可怜', '恐惧', '抠鼻', '口罩', '骷髅', '快哭了', '礼物', '流汗', '玫瑰', '怄火', '啤酒', '强', '敲打', '亲亲', '庆祝', '拳头', '弱', '傻呆', '删除', '胜利', '衰', '太阳', '跳跳', '吐舌头', '委屈', '握手', '西瓜', '笑哭', '心碎', '嘘', '疑问', '阴险', '拥抱', '悠闲', '右哼哼', '月亮', '晕', '再见', '炸弹', '咒骂', '猪头', '转圈', '嘴唇', '左哼哼']

export default class BlogListItem extends Component {

  emojiClick = (e) => {
    this.props.onSelect && this.props.onSelect(e)
  }

  render(){
    return (
      <div className="emoji-wrapper">
        {
          emojis.map((item, index) => (
            <div onClick={() => this.emojiClick(item)} key={`${index}`} title={item} className="pull-left emoji-item">
              <img src={emojiPath + item + emojiExtemsion} alt={item} className="emoji-img" />
            </div>
          ))
        }
      </div>
    )
  }
}