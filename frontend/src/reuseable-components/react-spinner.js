import React, {Component} from "react";
import {connect} from "react-redux";
import Loader from "react-loader-spinner";

class ReactSpinner extends Component {
    render() {
        const {loading} = this.props;
        if (!loading) return null;
        return (
            <div className="loader-container">
                <div className="loader">
                    <Loader
                        style={{position: 'absolute', top: '50%', left: '50%', margin: '-25px 0 0 -25px'}}
                        type="Grid"
                        color="#007bff"
                        height={100}
                        width={100}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.site.loading_screen,
})
export default connect(mapStateToProps)(ReactSpinner);