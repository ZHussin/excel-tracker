import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import {
  withRouter
} from 'react-router-dom'
import PropTypes from 'prop-types';

import UserServices from '../../services/UserServices';

/**
 * Pop-up button used to delete a user from the program
 * 
 * Dialog created using the Material UI Dialog 
 * demos here: https://material-ui.com/components/dialogs/
 * (Febuary 2020)
 */
class DeleteStudent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    }

  }

  openWindow = () => {
    this.setState({
      open: true
    })
  }

  closeWindow = () => {
    this.setState({
      open: false
    })
  };

  handleSubmit = () => {
    this.props.history.push('/users');
    UserServices.deleteStudent(this.props.email)
    this.closeWindow()
  }

  render() {
    return (
      <div>
        <Button variant='contained' onClick={this.openWindow} color='secondary'>Delete User</Button>
        <Dialog open={this.state.open} onClose={this.closeWindow}>
          <DialogTitle>Are you sure you would like to delete this student?</DialogTitle>

          <DialogActions>
            <Button variant='contained' onClick={this.closeWindow} color="secondary">
              Cancel
            </Button>
            <Button variant='contained' onClick={this.handleSubmit} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  
}

DeleteStudent.propTypes = {
  email: PropTypes.string.isRequired
}


export default withRouter(DeleteStudent);