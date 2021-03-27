import React, { useState } from "react";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";


function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  const checkValidation=(e)=>{
    const confPass = e.target.value;
    setConfirmPassword(confPass)
    if(password != confPass){
      setError("passwords does not match");
    }
    else{
      setError("");
    }
  }
  return (
    <div>
      <div className="error">
        {error}
      </div>
      <div id="signup" className="container1">
      <form className="form-signup">
        <h1 className="h3 mb-3 signup font-weight-normal">Sign up</h1>
        <label for="UserId" class="sr-only">
          User id
        </label>
        <input
          type="text"
          id="UserId"
          class="form-control"
          placeholder="User Id *"
          required=""
          autofocus=""
        />

        <label for="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          class="form-control"
          placeholder="Email address *"
          required=""
        ></input>

        <label for="inputPassword" class="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          class="form-control password"
          placeholder="Password *"
          required=""
        />

        <label for="inputPassword" class="sr-only">
          Confirm Password
        </label>
        <input
          type="password"
          id="inputPassword1"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => checkValidation(e)}
          class="form-control confirmpassword"
          placeholder="Confirm Password *"
          required=""
        />

        <button
          id="sign"
          class="btn btn-lg btn-primary btn-block button"
          type="submit"
          onClick={register}
        >
          Create An Account
        </button>
      </form>
    </div>
    </div>
  );
}

export default Signup;
