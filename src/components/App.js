import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import Question from './Question'
import Unanswered from './Unanswered'
import Answered from './Answered'
import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import Protected from './Protected'
import AddQuestion from './AddQuestion'
import Navigation from "./Navigation"
import {handleInitialData} from "../actions/shared"
import { connect } from 'react-redux'
import Nomatch from './Nomatch'



class App extends Component {

componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                     <div>
                     <Navigation />
                        <Route path="/login" component={Login}/>
                        <Switch>
                          <PrivateRoute path="/Question/:question_id" component={Question}/>
                          <PrivateRoute path="/Dashboard/Unanswered" component={Unanswered}/>
                          <PrivateRoute path="/Dashboard/Answered" component={Answered}/>
                          <PrivateRoute path="/LeaderBoard" component={LeaderBoard}/>
                          <PrivateRoute path="/add" component={AddQuestion}/>
                        </Switch>
                        </div>
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
