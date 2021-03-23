import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import About from './About';
import Contact from './Contact';
import Home from './Home';
// import Router from './Router'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

function App(){
    return(
       <Router>
            <div class="">
                <Header />
                
                <Switch>
                    <Route path="/" exact component={Login}></Route>
                    <Route path="/home" exact component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/signup" component={Signup}></Route>
                    <Route path="/contact" component={Contact}></Route>
                </Switch>           
                {/* <Footer /> */}
            </div>
       </Router>
    );
}

export default App;