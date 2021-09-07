import {LOGIN_STATUS, LOGOUT, SNACKBAR,} from '../actions/types';
import React from 'react';

export const initialState = {
    login_status: false,
};
export default function (state = initialState, action) {
    switch (action.type) {

        case LOGIN_STATUS: {
            return {
                ...state,
                login_status: action.loginStatus
            }
        }
        case LOGOUT: {
            return {
                ...state,
                loginStatus: action.loginStatus
            }
        }
        default:
            return state;
    }

}