import {ADD_TODO, TOGGLE_COMPLETE, REMOVE_TODO} from "../action/action-types"

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload]
        case REMOVE_TODO: 
            return state.filter(todo => todo.id !== action.payload)
        case TOGGLE_COMPLETE:
            return state.map((todo) => {
                if(todo.id == action.payload){
                    if(todo.completed == true){
                        todo.completed = false
                    }
                    else{
                        todo.completed = true
                    }
                }
                return todo;
            })
        default:
            return state;
    }
}