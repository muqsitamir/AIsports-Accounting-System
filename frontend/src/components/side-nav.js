import React, {Component} from "react";
import {Link} from "react-router-dom";

class SideNav extends Component {
    render() {
        return (
            <div className="side-menu-panel hide-scrollbar">
                <div className="ph3">
                    <ul className="side-menu pl0 pb4">
                        <li className={"item item-active"}>
                            <Link className="db text-decoration-none" to="/">
                                <i className="material-icons-outlined v-mid mr2">home</i>
                                <span>Home</span>
                            </Link>
                        </li>
                        {/*<li className={"item"}>*/}
                        {/*    <Link className="db text-decoration-none" to="#">*/}
                        {/*        <i className="material-icons-outlined v-mid mr2">person</i>*/}
                        {/*        <span>Profile</span>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {/*<li className={"item"}>*/}
                        {/*    <Link className="db text-decoration-none" to="#">*/}
                        {/*        <i className="material-icons-outlined v-mid mr2">settings</i>*/}
                        {/*        <span>Settings</span>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li className={"item"}>
                            <Link className="db text-decoration-none" to="/logout">
                                <i className="material-icons-outlined v-mid mr2">lock</i>
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default SideNav;