import React, {Component, Fragment} from "react";
import TopAppBarIndex from "./top-app-bar--index";

class TopAppBar extends Component {
    render() {
        return (
            <Fragment>
                {
                    window.location.pathname.startsWith("/login") ? null :
                        window.location.pathname.startsWith("/register") ? null :
                            window.location.pathname.startsWith("/reset-password") ? null :
                                window.location.pathname.startsWith("/resend/new-password") ? null :
                                window.location.pathname.startsWith("/new-password/") ? null :
                                    <TopAppBarIndex/>
                }
            </Fragment>
        );
    }
}

export default TopAppBar;