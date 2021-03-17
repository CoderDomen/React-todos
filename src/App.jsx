import React, { Component } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ItemList from "./component/ItemList";
import Parent from "./component/Parent/Parent";
import Child from "./component/Child/Child";
import Child2 from "./component/Child2/Child2";

class App extends Component {
  state = {
    todos: [
      { id: "01", name: "吃饭", done: false },
      { id: "02", name: "睡觉", done: false },
      { id: "03", name: "大东东", done: false }
    ],
    child: false
  };

  // 添加任务           ---增
  add = todo => {
    const { todos } = this.state;
    // setState 第二个参数  回调函数打印更新后的状态
    this.setState({ todos: [todo, ...todos] }, () => {
      console.log(this.state.todos);
    });
  };

  // 当前任务按钮       ----改
  // 不要直接修改state中的数据，要使用一个新数据(找到要修改的值，修改，重新组成新对象，赋值)进行setState
  change = (id, type) => {
    const { todos } = this.state;
    let newTodos = todos.map(item => {
      if (item.id === id) return { ...item, done: type };
      //修改一个对象中某个属性
      else return item;
    });
    this.setState({ todos: newTodos });
  };

  // 全选按钮          ----改
  select = type => {
    const { todos } = this.state;
    let newTodos = todos.map(item => {
      return { ...item, done: type };
    });
    this.setState({ todos: newTodos });
  };

  // 清除已完成任务     ----删
  clearHasDone = () => {
    const { todos } = this.state;
    let newTodos = todos.filter(item => {
      return !item.done;
    });
    this.setState({ todos: newTodos });
  };

  // 删除当前任务       ----删
  dele = i => {
    const { todos } = this.state;
    let newTodos = todos.filter(item => {
      return item.id !== i;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    let { todos } = this.state;
    return (
      <div style={{ width: "50%", margin: "0 auto" }}>
        <Header add={this.add} />
        <ItemList todos={todos} change={this.change} dele={this.dele} />
        <Footer
          todos={todos}
          select={this.select}
          clearHasDone={this.clearHasDone}
        />

        <hr style={{ margin: "10px", color: "red" }} />
        {/* 父子组件之间的嵌套,在父组件中插入插槽，则标签内容可选择插入任何子子组件 */}
        <Parent>{this.state.child ? <Child /> : <Child2 />}</Parent>
      </div>
    );
  }
}

export default App;
