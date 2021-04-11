import React, {useState} from 'react';
import {Container, FormGroup, Input, Button, Form, InputGroup, InputGroupAddon} from 'reactstrap';
import { nanoid } from 'nanoid';
import {connect} from "react-redux";
import {addTodo} from "../action/todo";
import './index.css';


const TodoForm = ({addTodo}) => {
    const [title, setTitle] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if(title === '') {
            return alert("Please add a todo first")
        }
        const todo = {
            title,
            id: nanoid(),
            completed: false
        }
        addTodo(todo)
        setTitle('')
    }
    return ( 
       <Container className="formContainer">
          <Form onSubmit={handleSubmit}>
           <FormGroup>
               <InputGroup>
                  <Input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Your next Todo"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                   <InputGroupAddon addonType="prepend">
                       <Button color = "dark" onClick={handleSubmit}>ADD</Button>
                   </InputGroupAddon>
               </InputGroup>
           </FormGroup>
       </Form>
       </Container>
       
    );
}

const mapStateToProps = state => ({}) //not using it here
const mapDispatchToProps = dispatch => ({
    addTodo: todo => {
        dispatch(addTodo(todo))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);