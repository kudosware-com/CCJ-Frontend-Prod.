import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Save from './components/Save'
import Logout from './components/logout'
import './css/css/bootstrap.css'
import './css/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, NavLink, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';
import axiosInstance from './components/MyAxios';

function App() {
  const [logged, setLogged] = useState(false);
  useEffect(()=>{
    axiosInstance.get('auth/verify').then((res)=>{
      if(res.data.logged == true){
        setLogged(true);
        localStorage.setItem('logged',true)
      }
      else{
        setLogged(false);
        localStorage.setItem('logged',false)
      }
    })
  },[])

  return (
    <div className="App">
      <Navbar logged={logged}/>

      <Switch>
        <Route exact={true} path="/" component={Home}>
        </Route>
        <Route path="/blog" component={Blogs}>
        </Route>
        <Route path ="/login" render={(props)=>(<Login handleLoginFromApp={setLogged}></Login>)}/>
        <Route path ="/logout" render={(props)=>(<Logout handleLoginFromApp={setLogged}></Logout>)}/>
        <Route path="/signup" component={Signup}>
        </Route>
        <Route path="/contact" component={Contact}>
        </Route>
        <Route path="/save" component={Save}>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
