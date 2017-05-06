import { combineReducers } from 'redux';


//SignView.js

import { SHOW_SIGNVIEW, HIDE_SIGNVIEW, SHOW_SIGNUPVIEW, HIDE_SIGNUPVIEW } from '../actions';
const signViewInitialState = {
    show: false,
 	showSignup: false,
};

const signView = (state = signViewInitialState, action) => {
    switch(action.type) {
        case SHOW_SIGNVIEW:
            return Object.assign({}, state, {
                show: true
            });
        case HIDE_SIGNVIEW:
            return Object.assign({}, state, {
                show: false
            });
        default:
            return state;
    }
};


//Launch.js

const lauhcnInitialState = {
    name: undefined,
 	description: undefined,
 	category: undefined,
 	logo: undefined,
 	logobase: undefined,
 	refundPolicy: undefined,
 	refundPolicyCondition: undefined,
 	refundPolicyInstruction: undefined,
 	symbol: undefined
};

const launch = (state = lauhcnInitialState, action) => {
    switch(action.type) {
        case 'UPDATE_NAME':
            return Object.assign({}, state, {
                name: action.content
            });
        case 'UPDATE_DESCRIPTION':
            return Object.assign({}, state, {
                description: action.content
            });
        case 'UPDATE_CATEGORY':
            return Object.assign({}, state, {
                category: action.content
            });
        case 'UPDATE_LOGO':
            return Object.assign({}, state, {
                logo: action.content
            });
        case 'UPDATE_LOGOBASECODE':
            return Object.assign({}, state, {
                logobase: action.content
            });
        case 'UPDATE_REFUNDPOLICY':
            return Object.assign({}, state, {
                refundPolicy: action.content
            });
        case 'UPDATE_REFUNDCONDITION':
            return Object.assign({}, state, {
                refundPolicyCondition: action.content
            });
        case 'UPDATE_REFUNDINSTRUCTION':
            return Object.assign({}, state, {
                refundPolicyInstruction: action.content
            });
        case 'UPDATE_SYMBOL':
            return Object.assign({}, state, {
                symbol: action.content
            });
        default:
            return state;
    }
};

//DashboardProduct
const dashboardProductInitialState = {
    type: 'basic',
    name: '',
    category: '',
    price: '',
    option: '',
    addon: '',
    image: ''
};
const dashboardProduct = (state = dashboardProductInitialState, action) => {
    switch(action.type) {
        case 'UPDATE_DASHBOARD_PRODUCT':
            var payload = {};
            payload[action.which] = action.content;
            return Object.assign({}, state, payload);
        default:
            return state;
    }
};

//USER
import { TRY_LOGIN } from '../actions';
const userInitialState = {
    logined: 2,
 	userEmail: '',
    userId: '',
 	userFirstName: '',
 	userLastName: '',
 	location: '',
};
const user = (state = userInitialState, action) => {
    switch(action.type) {
        case TRY_LOGIN:
            return Object.assign({}, state, {
            	logined: action.success,
                userEmail: action.email,
                userId: action.uid
            });
        case 'LOCATION_UPDATE':
        	return Object.assign({}, state, {
				location: action.location.pathname
            });
        default:
            return state;
    }
};





//Dashboard-entry/BottomNav.js
import { DASHBOARD_SHOW_BOTTOM_NAV } from '../actions';
const dashboardBottomNavInitialState = {
    show: false,
    logo: '',
    name: '',
    category: ''
};
const dashboardBottomNav = (state = dashboardBottomNavInitialState, action) => {
    switch(action.type) {
        case DASHBOARD_SHOW_BOTTOM_NAV:
            return Object.assign({}, state, {
            	logo: action.logo,
                name: action.name,
                category: action.category,
                show: action.show
            });
        default:
            return state;
    }
};
 
 //navBar/MainDropDown.js


const mainDropDownInitialState = {
    show: false,
};
const mainDropDown = (state = mainDropDownInitialState, action) => {
    switch(action.type) {
        case 'SHOW_MAINDROPDOWN':
            return Object.assign({}, state, {
            	show: true
            });
        case 'HIDE_MAINDROPDOWN':
            return Object.assign({}, state, {
            	show: false
            });
        default:
            return state;
    }
};


//Loading
const loadingInitialState = {
    show: false,
    content: '',
};
const loading = (state = loadingInitialState, action) => {
    switch(action.type) {
        case 'SHOW_LOADING':
            return Object.assign({}, state, {
                show: true,
                content: action.content
            });
        case 'HIDE_LOADING':
            return Object.assign({}, state, {
                show: false
            });
        default:
            return state;
    }
};

const app = combineReducers({
    signView,
    launch,
    dashboardProduct,
    user,
    dashboardBottomNav,
    mainDropDown,
    loading
});
 
export default app;