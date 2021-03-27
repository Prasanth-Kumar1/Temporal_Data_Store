import React ,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';
import Dashboard from './Dashboard';

 
function Login(){
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = e=>{
    e.preventDefault();
    auth
         .signInWithEmailAndPassword(email, password)
         .then(auth =>{
           history.push('/dashboard')
         })
         .catch(error => alert(error.message))
  }



    return(
      <login>
        <div className="container1">
          <form className="form-signin">
            <img ></img>
            <h1 className="h3 mb-3 font-weight-normal">Log in</h1>
            <label for="ipaddress" class="sr-only">Ip address</label>
            <input type="ip" id="ipaddress" class="form-control" placeholder="Ip address" required=""autofocus=""/>
            
            <label for="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" value={email} onChange={e => setEmail(e.target.value)} 
            class="form-control" placeholder="Email address *" required="" ></input>
            
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" value={password} onChange={e => setPassword(e.target.value)} 
            class="form-control" placeholder="Password *" required=""/>
            
            <div class="checkbox mb-3">
              <input  type="checkbox"></input>
              <label class="checkbox" for="remember"> Remember me</label>
            </div>

            <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={signIn}>Sign in</button>
        </form>
        <a id="forget" href="#">forget password?</a>
        </div>
      </login>
    );
}

export default Login;