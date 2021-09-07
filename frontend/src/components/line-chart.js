import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {connect} from "react-redux";
import {getLineChart} from "../actions/site";

const demo_data = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Dataset 1',
            fill: false,
            // lineTension: 0.5,
            backgroundColor: 'rgb(245,5,5)',
            borderColor: 'rgb(245,5,5)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56],
        }
    ]
}

class LineChart extends Component {

    componentDidMount() {
        // console.log("line-date: ", this.props.start_date + " - " + this.props.end_date)
        this.props.getLineChart(this.props.start_date, this.props.end_date)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.start_date !== this.props.start_date || prevProps.end_date !== this.props.end_date) {
            // console.log("Date Changed", this.props.start_date + " - " + this.props.end_date)
            this.props.getLineChart(this.props.start_date, this.props.end_date)
        }
    }

    render() {
        const data = this.props.line_chart_data;
        return (
            <div>
                <Line
                    height="100px"
                    data={data != null && data}
                    type="line"
                    options={{
                        responsive: true,
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
            </div>
        );
    }
}

const mapStateToProps = state => ({
    line_chart_data: state.site.line_chart,
    start_date: state.site.start_date,
    end_date: state.site.end_date,
});

export default connect(mapStateToProps, {getLineChart})(LineChart);
