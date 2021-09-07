import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../actions/authentication";

class Logout extends Component {


    componentDidMount() {
        this.props.logout()
    }

    render() {
        return null;
    }
}

export default withRouter(connect(null, {logout})(Logout));