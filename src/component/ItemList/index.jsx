import React, { Component } from "react";
import Item from "./Item";
import "./index.scss";

class ItemList extends Component {

  render() {
    let { todos,change,dele } = this.props;
    console.log(todos);

    return (
      <ul className="ul_wrapper">
        {todos.map(item => {
          return <Item key={item.id} {...item} change={change}  dele={dele}/>;
        })}
      </ul>
    );
  }
}

export default ItemList;
