import React from 'react';
import {Dialog, DialogTitle, Button} from '@material-ui/core'; //see https://material-ui.com/components/dialogs/
// import {Redirect} from 'react-router-dom';
// a popup after succesfu,lly creating account or logging in

const SignedIn = (props) => {
  // const {history} = props.history

  const handleClose = () => {
    // redirect to home page or maybe userpage
    // return  <Redirect  to="/" />
    props.history.push('/')
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Thanks for signing up </DialogTitle>
      <h2>
        {console.log(props)}
        Test
      </h2>
      <Button variant="contained" color="primary" onClick={handleClose}>
        Continue
      </Button>
    </Dialog>
  )
}


export default SignedIn
// have access to redux store and the user that signed in
