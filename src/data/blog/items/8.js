import React, { Component } from 'react'
import Emoji from '../../../components/Emoji'
import '../../../styles/base.css'

export default class Content extends Component {
  constructor (props) {
    super(props)
    this.myRef = React.createRef()
  }

  state = {
    showEmojis: false
  }

  emojiSelect = emoji => {
    this.toggleEmojiMask()
    console.log('click', emoji)
    this.myRef.current.innerHTML = this.myRef.current.innerHTML + `<img src="${process.env.PUBLIC_URL}/emoji/${emoji}.png" alt="${emoji}" />`
  }

  maskClick = e => {
    e.stopPropagation()
    if (e.target.id === 'mask') this.toggleEmojiMask()
  }

  toggleEmojiMask = () => {
    this.setState({
      showEmojis: !this.state.showEmojis
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.toggleEmojiMask}>选择表情</button>
        <div ref={this.myRef} id="test" className="input" contentEditable suppressContentEditableWarning><img src={process.env.PUBLIC_URL + '/emoji/OK.png'} alt="OK" />点击输入啊啊啊啊</div>
        
        {
          this.state.showEmojis ? (
            <div onClick={this.maskClick} id="mask" className="mask">
              <Emoji onSelect={this.emojiSelect} />
            </div>
          ) : null
        }
      </div>
    )
  }
  
}