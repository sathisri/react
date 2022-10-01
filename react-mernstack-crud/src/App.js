import {Routes,Route} from 'react-router-dom';
import './App.css';
import Nav from './NavLink/NavLink';
import TodoList from './Pages/ToDo-List';
import EditToDo from './Pages/Edit-ToDo';
import CreateToDo from './Pages/Create-ToDo';
// import {useParams} from 'react-router-dom'

function App() {
  // const {id}=useParams();
  return (
    <div className="App">
     
     <Nav></Nav>
     <Routes>
      <Route path="/todolist" element={<TodoList></TodoList>}>Hello</Route>
      <Route path='/edit/:id' element={<EditToDo></EditToDo>}></Route>
      <Route path="/create" element={<CreateToDo></CreateToDo>}></Route>
     </Routes>
    </div>
  );
}

export default App;
