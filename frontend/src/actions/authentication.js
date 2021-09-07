import axios from "axios";
import {ALERT_MESSAGE, LOGIN_STATUS, LOGOUT, SNACKBAR} from "./types";
import {showLoadingScreen} from "./site";


const Header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': "*",
    'Accept': '*/*'
};


export const login = (user, props) => dispatch => {
    dispatch(showLoadingScreen(true))
    axios.post("accounts/api/token/login/", user, {headers: Header}).then(res => {
        localStorage.setItem("loginStatus", true)
        localStorage.setItem("token", res.data.auth_token);
        dispatch({
            type: LOGIN_STATUS,
            loginStatus: true
        });
        const {state} = props.location;
        window.location = state ? state.from.pathname : "/"

    }).catch(err => {
        dispatch({
            type: SNACKBAR,
            snackbar_show: true,
            snackbar_message: err.response.data.non_field_errors[0],
        });
        dispatch({
            type: LOGIN_STATUS,
            loginStatus: false
        });
    }).finally(() => {
        dispatch(showLoadingScreen(false))
    });


};

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT,
        loginStatus: false
    });
    localStorage.clear();
    window.location = '/login';
};
