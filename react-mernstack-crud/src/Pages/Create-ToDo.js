import { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateToDo(){
const[Describe,setDescribe]=useState('');
const[Response,setResponse]=useState('');
const[Piriority,setPiriority]=useState('');


    function submit(e){
        e.preventDefault();
        console.log(`Description:${Describe},Responsible:${Response},Pririority:${Piriority}`);
        

        const newToDo={
            description:Describe,
            response:Response,
            piriority:Piriority
        }

        axios.post('http://localhost:5500/add',newToDo).then(res=>alert(res.data));
        setDescribe("");
        setResponse("");
        setPiriority('');
    }

    function des(e){
        setDescribe(e.target.value);
    }

    function res(e){
        setResponse(e.target.value);
    }

    function pir(e){
        setPiriority(e.target.value);
    }
    const navigate=useNavigate();
    function go(){
        navigate('/todolist');
    }
    return(
        <div id="create">
            <h1>Welcome to Create-ToDo</h1>
            <form onSubmit={submit}>
                <label >Description</label>
                <input type="text" value={Describe} onChange={des}/>
                <label >Responsible</label>
                <input type='text' value={Response} onChange={res}/>
                <br></br>
                <div>
                    <input type='radio' name='one' value='Low' checked={Piriority==='Low'}  onChange={pir}/><label>Low</label>
                    <input type='radio' name='one'value='Medium'checked={Piriority==='Medium'} onChange={pir}/><label>Medium</label>
                    <input type='radio' name='one'value='High' checked={Piriority==='High'} onChange={pir}/><label>High</label>
                    </div>
                <br></br>
                <input type='submit' value='Create'/>
            </form><br/>
            <button onClick={go}>Goto ToDoList</button>
        </div>
    )
};

export default CreateToDo;