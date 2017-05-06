var React = require('react');

var Radium = require('radium');
import { Link } from "react-router"

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var style = {
	base:{
	   marginLeft: 'auto',
	   marginTop: '20px',
	   height: '400px',
	   display: 'flex',
	   alignItems: 'center',
	   justifyContent: 'center'
	},
	gridBase: {
		width: '150px',
		height: '150px',
		display: 'inline-block',
		margin: '10px',
		textAlign: 'center',
		lineHeight: '150px',
		transition: 'background-color 0.5s ease',
		':hover' :{
			boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
			transition: 'all 0.3s ease'
		}
	},
	deliveryGrid: {
		backgroundColor: '#73DEE3',
	},
	pickupGrid:{
		backgroundColor: '#E88673',
	},
	link:{
		color: '#fff'
	}
}

class DeliveryMethod extends React.Component {
	constructor(props) {
    	super(props);
    	this.onMethodSelect = this.onMethodSelect.bind(this);
 	}
 	onMethodSelect(type) {
 		this.props.onMethodSelect(type);
 	}
 	componentWillMount(){
 		window.scrollTo(0, 0);
 	}
	render(){

		return(
			<div>
				<ReactCSSTransitionGroup key="Group2" transitionName="fade" 
						transitionAppear = {true} transitionAppearTimeout = {500}
						transitionLeave = {true} transitionLeaveTimeout = {500}
						transitionEnter = {true} transitionEnterTimeout = {500}>
				<div style={ style.base } >
					<Link style={style.link} to={`/${this.props.symbol}/checkout/address`}>
					<div onClick={this.onMethodSelect.bind(this, 'delivery')} key="deliveryGrid" style={ [style.gridBase, style.deliveryGrid] }>
					  Delivery
					</div>
					</Link>
					<Link style={style.link} to={`/${this.props.symbol}/checkout/address`}>
					<div onClick={this.onMethodSelect.bind(this, 'pickup')} key="pickupGrid" style={ [style.gridBase, style.pickupGrid] }>
					Pickup
					</div>
					</Link>
				</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}

};

module.exports = Radium(DeliveryMethod);