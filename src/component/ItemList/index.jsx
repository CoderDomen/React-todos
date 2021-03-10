import React, { Component } from "react";
import Item from "./Item";
import "./index.scss";

class ItemList extends Component {

  // emt = (id,value) =>{
  //   this.props.emtt(id,value)
  // }

  render() {
    let { todos,emtt,dele } = this.props;
    console.log(todos);

    return (
      <ul className="ul_wrapper">
        {todos.map(item => {
          return <Item key={item.id} {...item} emt={emtt}  dele={dele}/>;
        })}
      </ul>
    );
  }
}

export default ItemList;
