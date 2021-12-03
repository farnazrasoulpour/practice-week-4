import './Header.css';
import { useContext, useState } from 'react';
import { themeContext } from '../context/ThemContext';
import { Col, Switch } from 'antd';

const Header = ()=>{
    const {theme,setTheme}=useContext(themeContext);
    const handleCheck =(checked)=>{
        if(checked){
            setTheme("lightMode")
        }else{
            setTheme("darkMode")
        }
    }
    return(
        <div className='header'
         style={{
             color:theme==='lightMode'?"black":"white",
             backgroundColor:theme==='lightMode'?"white":"black"}}>
            
            <Switch 
            style={{position:'absolute',right:20}}
            checked={theme==="lightMode"?true:false}
            onChange={handleCheck}/>

            *Header*

            </div>
    )
};
export default Header;



