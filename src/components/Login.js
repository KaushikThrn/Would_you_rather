import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label} from 'reactstrap'
import {authenticateUser} from "../actions/authedUser"
import {Link, Redirect} from 'react-router-dom'

class Login extends Component {
    state={
        value:""
    }

  handleChange=(event)=> {
    this.setState({value: event.target.value});
  }

  handleSubmit=(event)=> {
    event.preventDefault();
    this.props.dispatch(authenticateUser(this.state.value));

  }


    render(){
        return(
        <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Select the user name:
          <select value={this.state.value} onChange={this.handleChange}>
             <option value='' disabled>Select</option>
          {
            this.props.users.map((user)=>(
                <option key={user.id} value={user.id}>{user.name}</option>
                ))
          }
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>{this.props.username.length===0?"no user":this.props.username[0]}</div>
      </div>
            )
    }
}

function mapStateToProps(state) {
    return {
        users: Object.values(state.users).map((user) => {
            return ({
                id: user.id,
                name: user.name
            })
        }),
        username: state.authedUser
    }
}

export default connect(mapStateToProps)(Login)