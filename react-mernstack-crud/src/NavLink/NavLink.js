import {NavLink} from 'react-router-dom';
import './NavLink.css'
import lgo from '../logo.svg';
import mongo from '../mongo.png'
import express from '../express.png'
import node from '../node.png';

function Nav(){
    return(
        <div>
            <nav>
                <ul>
                    <img src={mongo} alt='its a mongodb'/>
                    <img src={express} alt='its a express'/>
                    <img src={lgo} alt='its a logo'/>
                    <img src={node} alt='its a nodejs'/>
                <h1 id="h1">STACK ToDO App</h1>
                    <li>
                        <NavLink to="/todolist" activeclassname="active">ToDoList</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/edit/:id" activeclassname="active">EditToDo</NavLink>
                    </li> */}
                    <li>
                    <NavLink to="/create" activeclassname="active">CreateToDo</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Nav;