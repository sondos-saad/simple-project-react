 
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
        <Router>
            <Nav/>
            <Routes>
                <Route path='/' exact Component={Home}/>
                <Route path='/services' exact Component={Services}/>
                <Route path='/products' exact Component={Products}/>
                <Route path='/sign-up' exact Component={SignUp}/>
            </Routes>
        </Router>
        
        
    </>
  );
}

export default App;
