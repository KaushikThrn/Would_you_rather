import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label} from 'reactstrap'
import {authenticateUser} from "../actions/authedUser"
import {Link, Redirect} from 'react-router-dom'

class LeaderBoard extends Component {

    render(){
        console.log("LeaderBoard",this.props.users)
        console.log("LeaderBoard",this.props.sortedUsers)
        return(
            <div>
            <div>LeaderBoard</div>
             
            {this.props.users==null?<div>Loading</div>:
            <div>
                {this.props.sortedUsers.map((user)=>(
                <div>
                <span>{this.props.users[user]["name"]}</span>
                <img src={this.props.users[user].avatarURL} />
                <span>Asked:{this.props.users[user].questions.length} Answered:{Object.keys(this.props.users[user].answers).length}</span>
                </div>
               
                ))}
            </div>
        }
             
            </div>
            )
    }
}

function mapStateToProps({users}) {
    return {
        sortedUsers: Object.keys(users)
            .sort((a, b) => ((Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length))),
        users:users
    }
}


export default connect(mapStateToProps)(LeaderBoard)