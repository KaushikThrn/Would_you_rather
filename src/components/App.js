import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import Question from './Question'
import Unanswered from './Unanswered'
import Answered from './Answered'
import Dashboard from './Dashboard'
import Protected from './Protected'
import {handleInitialData} from "../actions/shared"
import { connect } from 'react-redux'


class App extends Component {

componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                     <div>
                 <ul>
                     <li>
                        {console.log("the state in app.js is",this.props.state)}
                          <Link to="/login">Login</Link></li>
                           <li><Link to="/Dashboard">Dashboard</Link></li>
                           <li><Link to="/Unanswered">Unanswered</Link></li>
                           <li><Link to="/Answered">Answered</Link></li>
                        </ul>
                        <Route path="/login" component={Login}/>
                        <Route path="/questions/:question_id" component={Question}/>
                        <Route path="/Dashboard" component={Dashboard}/>
                        <Route path="/Unanswered" component={Unanswered}/>
                        <Route path="/Answered" component={Answered}/>
                        <PrivateRoute path="/protected" component={Protected}/>
                        </div>
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps (state) {
  return {
    state: state
  }
}


export default connect(mapStateToProps)(App);
