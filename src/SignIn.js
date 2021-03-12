import { Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useHistory } from 'react-router';
import './SignIn.css';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';

const SignIn = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleModalState = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  const handleLogin = () => {
    console.log("Logged In user")
    history.push("/home");
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
              <input placeholder="Username" type="text" variant="outlined"></input>
              <input placeholder="Password" type="password" variant="outlined"></input>
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
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates
              occasionally.
            </DialogContentText>
              <input placeholder="Username" type="text" variant="outlined"></input>
              <input placeholder="Password" type="password" variant="outlined"></input>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className="signIn__login">
              Cancel
            </Button>
            <Button onClick={handleClose} className="signIn__login">
              Sign Up
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
   );
}
 
export default SignIn;