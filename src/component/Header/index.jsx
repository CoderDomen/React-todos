import React, { Component } from "react";
import './index.scss'

class Header extends Component {
  // 直接通过事件源获取数值，当需要获取其他dom的值，可以通过ref获取

  input = e => {
    let { keyCode, target } = e;
    if (keyCode !== 13) return; 
    if (target.value.trim() === "") {
      alert("输入不能为空");
      return;
    }
    // 创建一个todo对象
    let todo = { id: Date.now(), name: target.value, done: false };
    this.props.add(todo); // 子传父带参数
    target.value = "";
  };

  render() {
    return (
      <div >
        <input
        style={{width:"100%", height:'30px',outlineColor:'#00a8ff'}}
          type="text"
          onKeyUp={this.input}
          placeholder="请输入内容,按回车键确定"
        />
      </div>
    );
  }
}

export default Header;
