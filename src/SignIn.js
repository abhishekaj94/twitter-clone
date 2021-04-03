import { Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from './features/userSlice';
import axios from 'axios';
import './SignIn.css';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const SignIn = () => {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleModalState = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  const handleLogin = () => {

    const postParams = {
      userName : userName,
      password: password
    }
    axios.post('http://localhost:4000/login', postParams )
      .then((response) => {
        var responseData = response.data
        if(responseData.Status === "OK"){
          dispatch(logIn(responseData.Data.user))
          history.push("/home");
        }
        else{
          alert('Wrong username or password')
        }
      })
      .catch((err) => {
        console.log("error occured")
      });
  }

  const signUp = () => {
    const postParams = {
      userName: userName,
      password: password,
      fullName: fullName,
      email: email
    }
    axios.post('http://localhost:4000/signUp', postParams).then(response=>{
      var responseData = response.data
      if(responseData.Status === "OK"){
        alert("signed up")
      }
      else{
        alert('User exists')
      }
    })
    .catch((err) => {
        console.log("error occured")
      });
    handleClose()
  }

  return (
    <div>
      <div className="signIn">
        <div className="signIn__leftpanel">
          <TwitterIcon className="signIn__leftpanel__twitterLogo"></TwitterIcon>
        </div>
        <div className="singIn__rightpanel">
          <div className="signIn__form">
            <form>
              <input placeholder="Username" onChange={(e) =>{setUserName(e.target.value)} } type="text" required variant="outlined"></input>
              <input placeholder="Password" onChange={(e) =>{setPassword(e.target.value)} } type="password" required variant="outlined"></input>
              <Button onClick={handleLogin} variant="outlined">Log In</Button>
            </form>
          </div>
          <TwitterIcon className="signIn__twitterLogo"></TwitterIcon>
          <div className="signIn__banner">
            <h2>Happening Now</h2>
            <p>Join Twitter today.</p>
          </div>
          <div className="signIn__signUp">
            <Button onClick={handleModalState} variant="outlined">Sign Up</Button>
            <Button onClick={handleLogin} variant="outlined" className="signIn__login">Log In</Button>
          </div>
        </div>
      </div>

      <div className="dialog">
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
          <DialogContent>
            <div className="signUp__form">
              <div className="signUp__form__rows">
                <input placeholder="Username" onChange={(e) =>{setUserName(e.target.value)} } type="text" variant="outlined"></input>
                <input placeholder="Password" onChange={(e) =>{setPassword(e.target.value)} } type="password" variant="outlined"></input>
              </div>
              <div className="signUp__form__rows">
                <input placeholder="Full Name" onChange={(e) =>{setFullName(e.target.value)} } type="text" variant="outlined"></input>
                <input placeholder="Email" onChange={(e) =>{setEmail(e.target.value)} } type="text" variant="outlined"></input>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className="signIn__login">
              Cancel
            </Button>
            <Button onClick={signUp} className="signIn__login">
              Sign Up
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
   );
}
 
export default SignIn;