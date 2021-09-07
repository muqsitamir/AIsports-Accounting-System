import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';
import {connect} from "react-redux";
import {getPieChart} from "../actions/site";


class PieChart extends Component {

    componentDidMount() {
        // console.log("pie-date: ", this.props.start_date + " - " + this.props.end_date)
        this.props.getPieChart(this.props.start_date, this.props.end_date)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.start_date !== this.props.start_date || prevProps.end_date !== this.props.end_date) {
            // console.log("Date Changed", this.props.start_date + " - " + this.props.end_date)
            this.props.getPieChart(this.props.start_date, this.props.end_date)
        }
    }

    render() {
        const data = this.props.pie_chart_data;
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Pie
                    height="300px"
                    data={data != null && data}
                    type="pie"
                    options={{
                        responsive: false,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: false,
                                text: 'Chart.js Line Chart'
                            }
                        }
                    }}
                />
            </div>);
    }
}

const mapStateToProps = state => ({
    pie_chart_data: state.site.pie_chart,
    start_date: state.site.start_date,
    end_date: state.site.end_date,
});

export default connect(mapStateToProps, {getPieChart})(PieChart);
