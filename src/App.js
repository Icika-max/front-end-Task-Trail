import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import { Route, BrowserRouter, Routes} from 'react-router-dom';


function App() {
  return (
    <div className=" container App">
    <br />
    <h2>To Do List App</h2>
    <br />
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<TodoList/>}></Route>
      <Route path='/add' element={<AddTask/>}></Route>
    </Routes>

    </BrowserRouter>

    {/* <AddTask/>
    <TodoList/> */}
  

    
    </div>
  );
}

export default App;
