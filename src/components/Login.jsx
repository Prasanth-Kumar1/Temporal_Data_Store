import React from 'react';

function Login(){
    return(
      <login>
        <div className="container1">
          <form className="form-signin" autocomplete="false">
          <img></img>
          <h1 className="h3 mb-3 font-weight-normal">Log In</h1>
          <label for="ipaddress" class="sr-only">Ip Address</label>
          <input type="ip" id="ipaddress" class="form-control" placeholder="IP Address" required=""autofocus=""/>
          <label for="inputEmail" className="sr-only">Email Address</label>
          <input type="email"id="inputEmail" class="form-control" placeholder="Email Address" required="" ></input>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>
          <div class="checkbox mb-3">
            <input  type="checkbox"></input>
            <label class="checkbox" for="remember"> Remember Me</label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>
        </form>
        <a id="forget" href="#">forget password?</a>
        </div>
      </login>
    );
}

export default Login;