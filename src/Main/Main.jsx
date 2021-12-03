import { useContext, useState } from 'react';
import { themeContext } from '../context/ThemContext';
import './Main.css';
import TodoList from '../TodoList/TodoList';

const Main = ()=> {
    const{theme}=useContext(themeContext);
    const [todos,setTodos]=useState([]);
    
    return <div className='main'
     style={{
        color:theme==="lightMode"?"black":"white",
        backgroundColor:theme==="lightMode"?"white":"black"
        }}
        >
        <input className='input'
        placeholder='type...'
        style={{}}>
        </input>
        <button className='button'>ADD</button>

        <TodoList todos={todos} />
        

          </div>
};

export default Main;