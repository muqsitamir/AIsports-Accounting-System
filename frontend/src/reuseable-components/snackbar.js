import React, {Component} from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';
import {removeSnackbar} from "../actions/site";
import {connect} from 'react-redux';


class MessageSnackbar extends Component {

    handleClose = () => {
        this.props.removeSnackbar();

    };
    handleRequestClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.props.removeSnackbar();
    };

    render() {
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                }}
                open={this.props.snackbar_show}
                autoHideDuration={3000}
                onRequestClose={this.handleRequestClose}
                variant={"success"}
                message={this.props.snackbar_message}
                onClose={this.handleClose}>
                <MuiAlert onClose={this.handleClose} severity="error" variant="filled" elevation={6}>
                    {this.props.snackbar_message}
                </MuiAlert>
            </Snackbar>

        );
    }
}

const mapStateToProps = state => ({
    snackbar_show: state.site.snackbar_show,
    snackbar_message: state.site.snackbar_message
});

export default connect(mapStateToProps, {removeSnackbar})(MessageSnackbar);
