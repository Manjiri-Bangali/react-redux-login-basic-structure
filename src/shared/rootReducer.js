import { combineReducers } from 'redux';
import loginReducer from '../components/login/reducers/loginReducer';
import dashboardReducer from '../components/dashboard/reducers/dashboardReducer';

const rootReducer = combineReducers({
    loginReducer,
    dashboardReducer,
});

export default rootReducer;