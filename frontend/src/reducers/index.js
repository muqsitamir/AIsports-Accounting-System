import {combineReducers} from 'redux';
import authentication from './authentication';
import site from "./site";

export default combineReducers({
    authentication, site
});