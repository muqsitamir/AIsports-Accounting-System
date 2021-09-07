import React, {Component} from "react";
import {Link} from "react-router-dom";
import LineChart from "./line-chart";
import PieChart from "./pie-chart";
import GoogleMaps from "./google-maps";
import Filters from "../reuseable-components/filters";
import SideNav from "./side-nav";
import TableImage from "./table-image";

class Home extends Component {
    render() {
        return (
            <div className="page">
                <div className="page__content">
                    <div className="main-wrapper">
                        <SideNav/>
                        {/*<DatePicker/>*/}

                        <div className="main" style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>
                            <div className="container l mb7">
                                <header className="row mb4 db">
                                    <div className="col s12 m6">
                                        <h2 className="bold">Dashboard</h2>
                                    </div>
                                    <div className="fr">
                                        <Filters/>
                                    </div>
                                </header>

                                <div className="row">
                                    <div className="col s12 m4">
                                        <div className="link-mute">
                                            <div className="shadow-0 rounded-sm db mb3 pa3">
                                                <div className="flex">
                                                    <div className="mh3">
                                                        <i className="material-icons-outlined" style={{
                                                            color: '#0258ff',
                                                            fontSize: '36px'
                                                        }}>people</i>
                                                        {/*<img src="/static/users.svg" alt="" style="width: 64px">*/}
                                                    </div>
                                                    <div className="flex-grow-1" style={{minHeight: '136px'}}>
                                                       <h4 className="bold mb3">
                                                            Loreum Ipsum
                                                        </h4>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                                            aliquam orci augue, a lacinia massa rutrum eget.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12 m4">
                                        <div to="/admin/orders"
                                             className="link-mute">
                                            <div className="shadow-0 rounded-sm db mb3 pa3">
                                                <div className="flex">
                                                    <div className="mh3">
                                                        <i className="material-icons-outlined" style={{
                                                            color: '#0258ff',
                                                            fontSize: '36px'
                                                        }}>adjust</i>
                                                    </div>
                                                    <div className="flex-grow-1" style={{minHeight: '136px'}}>
                                                       <h4 className="bold mb3">
                                                            Loreum Ipsum
                                                        </h4>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                                            aliquam orci augue, a lacinia massa rutrum eget.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12 m4">
                                        <div to="/admin/products"
                                             className="link-mute">
                                            <div className="shadow-0 rounded-sm db mb3 pa3">
                                                <div className="flex">
                                                    <div className="mh3">
                                                        <i className="material-icons-outlined"
                                                           style={{color: '#0258ff', fontSize: '36px'}}>list</i>
                                                    </div>
                                                    <div className="flex-grow-1" style={{minHeight: '136px'}}>
                                                        <h4 className="bold mb3">
                                                            Loreum Ipsum
                                                        </h4>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                                            aliquam orci augue, a lacinia massa rutrum eget.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="content">
                                    <div className="row">
                                        <div className="shadow border rounded-sm db mb1">
                                            <div className="content tc">
                                                <div className="pa3">
                                                    <div className="mv3">
                                                        <LineChart/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col s12 m6">
                                            <div className="shadow border rounded-sm db mb3">
                                                <div className="content tc">
                                                    <div className="pa3">
                                                        <div className="mv3">
                                                            <PieChart/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col s12 m6">
                                            <div className="shadow border rounded-sm db mb3">
                                                <div className="content tc">
                                                    <div className="pa3">
                                                        <div className="mv3">
                                                            <GoogleMaps/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <TableImage/>

                                    {/*<div className="row">*/}
                                    {/*    <div className="col s12">*/}
                                    {/*        <h1 className="bold pb2">Loreum Ipsum</h1>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Home;