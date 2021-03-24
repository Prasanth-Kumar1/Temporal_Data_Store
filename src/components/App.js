import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

function App(){
    return(
       <Router>
            <div className="img">
                <Header />
                
                <Switch>
                    <Route path="/" exact ><Login /></Route>
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