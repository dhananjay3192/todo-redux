import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import { FaTrash, FaCheck, FaCheckDouble } from 'react-icons/fa';
import './index.css';
import {connect} from "react-redux";
import {removeTodo} from "../action/todo";
import {toggleComplete} from "../action/todo";

const TodoList = ({todos, toggleComplete, remove}) => {
    
    return ( 
        <ListGroup className="mt-5 mb-2">
            {todos.map((todo) => (
                <ListGroupItem key={todo.id} className="listRow">
                    <span>{todo.title}</span> 
                    <span>
                        <span className="mr-2 icon" onClick={() => toggleComplete(todo.id) }>{todo.completed? <FaCheckDouble />:<FaCheck />}</span>
                        <span className="ml-2 icon" onClick={()=>remove(todo.id)}>
                          <FaTrash />
                        </span>
                    </span> 
                </ListGroupItem>
            ))}
        </ListGroup>
     );
}
 
const mapStateToProps = state => ({
    todos: state.todos
})
const mapDispatchToProps = dispatch => ({
    remove: (id) => {
        dispatch(removeTodo(id))
    },
    toggleComplete : (id) =>{
        dispatch(toggleComplete(id))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);