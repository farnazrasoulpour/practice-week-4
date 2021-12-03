








import './Footer.css';
import { useContext } from 'react';
import { themeContext } from '../context/ThemContext';


const Footer =()=>{
    const {theme}=useContext(themeContext);
    
    return(
        <div className='footer'
        style={{
            color:theme==="lightMode"?"black":"white",
            backgroundColor:theme==="lightMode"?"white":"black"
            }}>
            Footer
        </div>
    );
};
export default Footer;

