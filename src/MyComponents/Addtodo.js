import React, {useState} from 'react'

export const Addtodo = (props) => {
    let myTodosstyle = {
        margin: "50px",
    }


    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit= (e)=>{
        e.preventDefault();
        if (!title || !desc){
            alert("Title or Description cannot be empty")
        }
        else{
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div classNameName="container my-3" style={myTodosstyle}>
            <h3>Add a Todos</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo title</label>
                    <input type="text" value={title} onChange={(e)=> {setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Todo Description</label>
                        <input type="text" value={desc} onChange={(e)=> {setDesc(e.target.value)}} className="form-control" id="desc"/>
                    </div>
                        
                            <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}
