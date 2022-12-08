import logo from './logo.svg';
import './App.css';
import todos from "./TodoData";
import React from "react";
import TodoItem from "./TodoItem";
class App extends React.Component {
  constructor() {
    super();
    this.state={
      todosData: todos
    }
    this.handleTodo = this.handleTodo.bind(this)
  }
  handleTodo(id){
  this.setState(prevState=>{
    let actualState = prevState.todosData.map(elem =>{
      if(elem.id === id){
        elem.completed = !elem.completed
        console.log("Поменяли данные задачи.")
      }
      return elem
    })
    return actualState
  })
}
  render() {
    let todoItemComponents = this.state.todosData.map(elem =>
      <TodoItem key={elem.id} elem={elem} handleTodo={this.handleTodo}/>
    )
    return (
        <>
          {todoItemComponents}
        </>

    );
  }
}

export default App;
