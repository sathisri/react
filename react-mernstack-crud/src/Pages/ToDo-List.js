import axios from "axios";
import { useState } from "react";
import {Link,useNavigate} from 'react-router-dom';


function TodoList(){

    
const[State,setState]=useState({todos:[]});



axios.get('http://localhost:5500/').then(res => setState({todos:res.data}));

function deleted(id){
    axios.delete(`http://localhost:5500/${id}`).then(res=>alert(res.data));
}

const navigate=useNavigate();
function go(){
    navigate('/create')
}
    
 return(
        <div id="create">
            <h1>ToDO-List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Response</th>
                        <th>Piriority</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {State.todos.map((todo,index)=>(
                      <tr key={index}>
                        <td>{todo.description}</td>
                        <td>{todo.response}</td>
                        <td>{todo.piriority}</td>
                        <td><Link to={'/edit/'+todo._id} id="link">Edit</Link></td>
                        <td><button onClick={()=>deleted(todo._id)}>Delete</button></td>
                      </tr>  
                    ))}             
                </tbody>
            </table>
            <br/>
            <button onClick={go}>Goto CreateToDo</button>            
        </div>
    )
};

export default TodoList;