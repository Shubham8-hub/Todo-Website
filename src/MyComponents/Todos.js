import React from 'react'
import {Todoitems} from '../MyComponents/Todoitems';

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="text-center my-4">Todos List</h3>
            {props.todos.length===0? "No todos to display":
            props.todos.map((todo)=>{
                return(
                <>
                <Todoitems todo={todo} key={todo.sno}onDelete={props.onDelete}/> <hr/>
                </>
                )
            })}
        </div>
    )
}
