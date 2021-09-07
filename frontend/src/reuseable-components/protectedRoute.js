import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


function ProtectedRoute({path, component: Component, render, user, ...rest}) {
    let loginStatus = localStorage.getItem("loginStatus")
    return (
        <Route {...rest} render={props => {
            if (!loginStatus) return <Redirect to={{
                pathname: "/login",
                state: {from: props.location}
            }}/>;
            return Component ? <Component {...props}/> : render(props);
        }}/>
    );
}

const mapStateToProps = state => ({
    // user: state.user.user
    // loginStatus: state.authentication.loginStatus
});

export default withRouter(connect(mapStateToProps)(ProtectedRoute));