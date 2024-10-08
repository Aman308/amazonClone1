
  import './App.css';
  import Maincompt from './components/body/Maincompt';
  import Footer from './components/footer/Footer';
  import Category from './components/header/Category';
  import Navbar from './components/header/Navbar';
  import Signin from './components/Signup_Signin/Signin';
  import Signup from './components/Signup_Signin/Signup';
  import Cart from './components/Signup_Signin/cart/Cart';
  import {
    BrowserRouter as Router, Routes, Route
  } from 'react-router-dom';

  function App() {
    return (
      <>
      <Router>
      <Navbar/>
      <Category/>
      <Routes>
      <Route path='/' element={<Maincompt />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/login' element={<Signin />}/>
      <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer/>
      </Router>
    </>
    );
  }

  export default App;
