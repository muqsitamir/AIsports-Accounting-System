import React, {Component, Fragment} from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom"
import Home from "../components/home";
import NotFound from "../components/not-found";
import TopAppBar from "../components/Headers/top-app-bar";
import Login from "../components/Authentication/login";
import Register from "../components/Authentication/register";
import ResetPassword from "../components/Authentication/resetPassword";
import NewPassword from "../components/Authentication/newPassword";
import ResendPassword from "../components/Authentication/resendPassword";
import ProtectedRoute from "../reuseable-components/protectedRoute"
import MessageSnackbar from "../reuseable-components/snackbar";
import ReactSpinner from "../reuseable-components/react-spinner";
import Logout from "../components/Authentication/logout";

class App extends Component {
    render() {
        return (
            <Fragment>
                <TopAppBar/>
                <ReactSpinner/>
                <Switch>
                    <ProtectedRoute exact path='/' render={(props) => <Home {...props}/>}/>
                    <Route exact path='/login' render={(props) => <Login {...props}/>}/>
                    <Route exact path='/register' render={(props) => <Register {...props}/>}/>
                    <Route path='/reset-password' render={(props) => <ResetPassword {...props}/>}/>
                    <Route path='/new-password/:token' render={(props) => <NewPassword {...props}/>}/>
                    <Route exact path='/resend/new-password' render={(props) => <ResendPassword {...props}/>}/>
                    <Route exact path='/logout' render={(props) => <Logout {...props}/>}/>
                    <Route path='/not-found' component={NotFound}/>
                    <Redirect to='/not-found'/>
                </Switch>
                <MessageSnackbar/>
            </Fragment>

        )
    }
}

export default withRouter(App);