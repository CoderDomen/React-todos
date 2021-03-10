import React, { Component } from "react";
import "./index.scss";

class Item extends Component {
  state = {
    mouse: false
  };

  // 鼠标进入  函数柯里化 返回一个函数， 也可以在标签中直接写一个箭头函数
  ent = flag => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  // 鼠标离开
  lev = flag => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  // 改变状态,获取id，子传父组件,修改done状态
  cha = (e, id) => {
    // console.log(id ,e.target.checked);
    this.props.emt(id, e.target.checked);
  };

  dele = id => {
    if (window.confirm("确定删除吗?")) {
      this.props.dele(id);
    }
  };

  render() {
    let { id, name, done } = this.props;
    let { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#eee" : "white" }}
        className="item_wrapper"
        onMouseEnter={this.ent(true)}
        onMouseLeave={this.lev(false)}
      >
        {/* {id} */}
        <input
          className="item_input"
          type="checkbox"
          checked={done}
          onChange={e => {
            this.cha(e, id);
          }}
        />
        <span className="item_content">{name}</span>
        <button
          className="item_btn"
          style={{ display: mouse ? "" : "none" }}
          onClick={() => {
            this.dele(id);
          }}
        >
          删除
        </button>
      </li>
    );
  }
}

export default Item;
