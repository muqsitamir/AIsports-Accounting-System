import React, {Component} from "react";
import {Backdrop, Fade, Modal} from "@material-ui/core";
import DatePicker from "./date-range-picker";


class Filters extends Component {
    state = {
        open: false
    }

    handleOpen = (e) => {
        e.preventDefault()
        this.setState({open: true});
    };

    handleClose = () => {
        console.log("handleClose")
        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <button className="mdc-button mdc-top-app-bar__action-item mdc-button__ripple"
                        onClick={this.handleOpen}>

                    <i className="material-icons-outlined v-mid mr2">filter_list</i>
                    <span>Filter</span>
                </button>
                <Modal
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}>
                    <Fade in={this.state.open}>
                        <div className="custom-modal rounded-sm">
                            <DatePicker closeModal={this.handleClose}/>
                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    }
}

export default Filters;