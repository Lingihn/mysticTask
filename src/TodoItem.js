import React from "react";
class TodoItem extends React.Component{
    render(props) {
        return(
            <div>
                <h1>Задача №{this.props.elem.id}</h1>
                <h2>Сделать: {this.props.elem.task}</h2>
                <input type="checkbox" checked={this.props.elem.completed} onChange={()=> {this.props.handleTodo(this.props.elem.id)}}/>
            </div>
        )
    }
}
export default TodoItem