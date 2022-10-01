import { useState,useEffect } from 'react';
import axios from 'axios'
import {useParams,useNavigate} from 'react-router-dom'



function EditToDo() {

    const {id}=useParams();
const[state,setState]=useState([]);

useEffect(()=>{
    axios.get('http://localhost:5500')
.then((res) => setState(res.data))
}, []);
    
let filterTodo=state.filter((todo)=>
    todo._id===id
)


function update(id){
    axios.patch(`http://localhost:5500/update/${id}`,{description:Describe,response:Response,piriority:Piriority}).then(res=>alert(res.data));
    setDescribe('');
    setResponse('');
    setPiriority('');
}
     const[Describe,setDescribe]=useState();
     const[Response,setResponse]=useState();
     const[Piriority,setPiriority]=useState();

     const navigate=useNavigate();
     function go(){
        navigate('/todolist')
     }

    return (
        <div id='create'>
            <h1>Edit-ToDo </h1>
        
            {filterTodo.map((todo,index)=>(
                <div key={index} id='create'>
                   <form onSubmit={()=>update(todo._id)}>
                    <label>Descriprion</label>
                    <input type='text'   placeholder={todo.description} onChange={(e)=>setDescribe(e.target.value)}/>
                    <label>Response</label>
                    <input type='text'  placeholder={todo.response} onChange={(e)=>setResponse(e.target.value)}/>
                    <label>Piriority:&nbsp;{todo.piriority}</label>
                    <div>
                    <input type='radio' name='one' value='Low' checked={Piriority==='Low'}  onChange={(e)=>setPiriority(e.target.value)}/><label>Low</label>
                    <input type='radio' name='one'value='Medium'checked={Piriority==='Medium'} onChange={(e)=>setPiriority(e.target.value)}/><label>Medium</label>
                    <input type='radio' name='one'value='High' checked={Piriority==='High'} onChange={(e)=>setPiriority(e.target.value)}/><label>High</label>
                    </div>
                <br></br>
                <input type='submit' value='Update'/>
            </form>
                </div>
            ))}
            <br/><button onClick={go}>Goto ToDoList</button>
        </div>
    )
};

export default EditToDo;