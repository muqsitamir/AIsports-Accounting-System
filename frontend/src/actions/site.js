import {DATE_FILTER, LINE_CHART, LOADING_SCREEN, LOGIN_STATUS, PIE_CHART, SNACKBAR, TABLE_IMAGE} from "./types";
import axios from "axios";


const Header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': "*",
    'Accept': '*/*'
    //  'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': "content-type",
    // 'Accept': '*/*',
    // 'Content-Type': 'application/x-www-form-urlencoded,application/json',
    // 'crossdomain': 'true',
    // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PATCH, PUT',
};

export const removeSnackbar = () => dispatch => {
    dispatch({
        type: SNACKBAR,
        snackbar_show: false,
        snackbar_message: null
    })
};

export const showLoadingScreen = (show) => {
    return {
        type: LOADING_SCREEN,
        loading_screen: show
    }
};

export const getPieChart = (start_date, end_date) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    dispatch(showLoadingScreen(true));
    let config = {
        headers: Header,
        params: {
            image__date__gte: start_date,
            image__date__lte: end_date,
        },
    };
    axios.get("/core/api/box/piechart/", config).then(res => {
        dispatch({
            type: PIE_CHART,
            labels: res.data.labels,
            colors: res.data.colors,
            data: res.data.data,
        });
    }).catch(err => {
        dispatch({
            type: SNACKBAR,
            snackbar_show: true,
            snackbar_message: err.response.data,
        });
    }).finally(() => {
        dispatch(showLoadingScreen(false))
    });
};

export const getLineChart = (start_date, end_date) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    dispatch(showLoadingScreen(true))
    let config = {
        headers: Header,
        params: {
            image__date__gte: start_date,
            image__date__lte: end_date,
        },
    };
    axios.get("/core/api/box/linechart/", config).then(res => {
        dispatch({
            type: LINE_CHART,
            labels: res.data.labels,
            datasets: res.data.datasets,
        });

    }).catch(err => {
        dispatch({
            type: SNACKBAR,
            snackbar_show: true,
            snackbar_message: err.response.data,
        });
    }).finally(() => {
        dispatch(showLoadingScreen(false))
    });
};
export const getTableImage = (is_processed, start_date, end_date, page) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    dispatch(showLoadingScreen(true))
    let config = {
        headers: Header,
        params: {
            processed: is_processed,
            date_gte: start_date,
            date_lte: end_date,
            page: page,
        },
    };
    axios.get("/core/api/image/", config).then(res => {
        dispatch({
            type: TABLE_IMAGE,
            image_table: res.data,
        });

    }).catch(err => {
        dispatch({
            type: SNACKBAR,
            snackbar_show: true,
            snackbar_message: err.response.data,
        });
    }).finally(() => {
        dispatch(showLoadingScreen(false))
    });
};

export const dateFilter = (start_date, end_date) => dispatch => {
    dispatch({
        type: DATE_FILTER,
        start_date: start_date,
        end_date: end_date
    })
};
