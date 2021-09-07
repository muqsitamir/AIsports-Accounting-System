import React, {Component} from "react";
import {Link} from "react-router-dom";
import DateRangePicker from "../../reuseable-components/date-range-picker";
import Filters from "../../reuseable-components/filters";

class TopAppBarIndex extends Component {
    render() {
        return (
            <header className="mdc-top-app-bar mdc-top-app-bar--shadow__ mdc-top-app-bar--fixed js-top-app-bar"
                    data-mdc-auto-init="MDCTopAppBar">
                {/* Primary top app bar */}
                <div className="mdc-top-app-bar__row contain-full-bleed links--muted ">
                    <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                        <button
                            className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button dn-l js-trigger-mdc-drawer"
                            aria-label="Open navigation menu"
                            onClick={() => {

                            }}>menu
                        </button>
                        <Link to="/" className="mdc-top-app-bar__title">
                            <img className="w-15 h-10" src="static/images/ai_logo_small.jpeg" alt=""/>
                        </Link>
                    </section>
                    <section className="mdc-top-app-bar__section app-shop mdc-top-app-bar__section--align-end mr4"
                             role="toolbar">
                        <Link to="/" className="show-lg link-mute">
                            <button className="mdc-button mdc-top-app-bar__action-item">
                                <span className="mdc-button__ripple"/>
                                <span className="mdc-button__label">Home</span>
                            </button>
                        </Link>

                        <button
                            className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button dn-l js-trigger-mdc-drawer"
                            aria-label="Open navigation menu">menu
                        </button>
                    </section>

                </div>
            </header>
        );
    }
}

export default TopAppBarIndex;
