import React, {Component} from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DateRange} from 'react-date-range';
import {connect} from "react-redux";
import {dateFilter} from "../actions/site";
import {Button} from "@material-ui/core";


class DatePicker extends Component {

    state = {
        range: {
            startDate: null,
            endDate: new Date(),
            key: 'range',
        }
    }

    // componentDidMount() {
    //     const date = new Date()
    //     const end_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    //     this.props.dateFilter(null, end_date)
    // }

    handleSelect = (ranges) => {
        this.setState({range: ranges.range})
    }

    applyFilter = (e) => {
        e.preventDefault()
        console.log("filter applied")
        const start_date = this.state.range.startDate.getFullYear() + "-" + (this.state.range.startDate.getMonth() + 1) + "-" + this.state.range.startDate.getDate();
        const end_date = this.state.range.endDate.getFullYear() + "-" + (this.state.range.endDate.getMonth() + 1) + "-" + this.state.range.endDate.getDate();
        this.props.dateFilter(start_date, end_date)
        this.props.closeModal()
    }

    render() {
        return (
            <div className="center tc pv3 ph2">
                <DateRange
                    editableDateInputs={true}
                    onChange={this.handleSelect}
                    moveRangeOnFirstSelection={false}
                    ranges={[this.state.range]}
                    maxDate={new Date()}
                />
                <div>
                    <button className="btn btn-outline-primary" onClick={this.applyFilter}>Apply Filter</button>
                </div>
            </div>
        );
    }
}

export default connect(null, {dateFilter})(DatePicker);