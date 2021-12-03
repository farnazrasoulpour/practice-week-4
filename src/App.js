import logo from './logo.svg';
import './App.css';
import ThemePorovider from './context/ThemContext';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <ThemePorovider>
        <Header/>
        <Main/>
        <Footer/>
      </ThemePorovider>
    </div>
  );
}

export default App;
