import React, { Component } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ItemList from './component/ItemList'

class App extends Component {

  
  state = {
    todos: [
      { id: "01", name: "吃饭", done: false },
      { id: "02", name: "睡觉", done: false },
      { id: "03", name: "大东东", done: false }
    ]
  };

  // 添加任务           ---增
  em =(todo)=>{
    console.log(todo);
  }

  // 当前任务按钮       ----改
  emtt =(i)=>{
    console.log(i);
  }

  // 全选按钮          ----改
  select =(i)=>{
    console.log(i);
  }

  // 清除已完成任务     ----删
  clearHasDone =(i)=>{
    console.log(i);
  }

  // 删除当前任务       ----删
  dele =(i)=>{
    console.log(i);
  }


  render() {
    let { todos } = this.state;
    return (
      <div style={{width:"50%",margin:'0 auto'}}> 
        <Header em={this.em}/>
        <ItemList todos={todos}  emtt={this.emtt}   dele={this.dele}/>
        <Footer todos={todos}  select={this.select} clearHasDone={this.clearHasDone}/>
      </div>


    );
  }
}

export default App;
