import React from "react";
import ReactDOM from "react-dom";
import { StyleRoot } from 'radium';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import app from './reducers';
import { routeLocationDidUpdate } from './actions';
 
const store = createStore(app);

import { Router, Route, IndexRoute, hashHistory,browserHistory } from "react-router";
import Main from "./components/Main";
import GridContainer from "./components/grid/GridContainer";
import Search from "./components/Search";
import Store from "./components/Store";
import Checkout from "./components/Checkout";
import DeliveryMethod from "./components/checkout/DeliveryMethod";
import Address from "./components/checkout/Address";
import Pay from "./components/checkout/Pay";
import DashboardEntry from "./components/DashboardEntry";
import Launch from "./components/Launch";
import LaunchName from "./components/launch/LaunchName";
import LaunchDescription from "./components/launch/LaunchDescription";
import LaunchCategory from "./components/launch/LaunchCategory";
import LaunchLogo from "./components/launch/LaunchLogo";
import LaunchRefundPolicy from "./components/launch/LaunchRefundPolicy";
import LaunchSymbol from "./components/launch/LaunchSymbol";

import Dashboard from "./components/Dashboard";
import DashboardHome from "./components/dashboard/DashboardHome";
import DashboardOrder from "./components/dashboard/DashboardOrder";
import DashboardOrderPanel from "./components/dashboard/panel/OrderPanel";
import DashboardProduct from "./components/dashboard/panel/DashboardProduct";
import DashboardInventory from "./components/dashboard/DashboardInventory";


import NavBar from "./components/tool/NavBar";


class Client extends React.Component {
	constructor() {
    super();
 	}
	render(){
		return(
			<Provider store = {store}>
				<StyleRoot>
					<div>
						<NavBar />
						{this.props.children}
					</div>
				</StyleRoot>
			</Provider>
		);
	}

};

ReactDOM.render (( 
 <Router history={browserHistory}>
	<Route component={ Client }>
			<Route path="/" component={ Main }>
				<IndexRoute component={ GridContainer } />
				<Route path="/s/:key" component={ Search } />
			</Route>
			
			
			<Route path="/launch" component={ Launch }>
				<Route path="/launch/name" component={ LaunchName }></Route>
				<Route path="/launch/description" component={ LaunchDescription }></Route>
				<Route path="/launch/category" component={ LaunchCategory }></Route>
				<Route path="/launch/logo" component={ LaunchLogo }></Route>
				<Route path="/launch/refundpolicy" component={ LaunchRefundPolicy }></Route>
				<Route path="/launch/symbol" component={ LaunchSymbol }></Route>
			</Route>
			<Route path="/dashboard" component={ DashboardEntry }></Route>
			<Route path="/dashboard/:symbol" component={ Dashboard }>
				<Route path="/dashboard/:symbol/home" component={ DashboardHome }></Route>
				<Route path="/dashboard/:symbol/order" component={ DashboardOrder }></Route>
				<Route path="/dashboard/:symbol/order/:id" component={ DashboardOrderPanel }></Route>
				<Route path="/dashboard/:symbol/inventory" component={ DashboardInventory }></Route>
				<Route path="/dashboard/:symbol/product/add/:page" component={ DashboardProduct }></Route>
				<Route path="/dashboard/:symbol/product/edit/:page" component={ DashboardProduct }></Route>
			</Route>

			<Route path="/:symbol" component={ Store }></Route>
			<Route path="/:symbol/checkout" component={ Checkout }>
				<IndexRoute component={ DeliveryMethod }></IndexRoute>
				<Route path="/:symbol/checkout/address" component={ Address }></Route>
				<Route path="/:symbol/checkout/pay" component={ Pay }></Route>
			</Route>	
	</Route>
 </Router>
), document.getElementById("app"));

browserHistory.listen(location => store.dispatch(routeLocationDidUpdate(location)));

// 
// );