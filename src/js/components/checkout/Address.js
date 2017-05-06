var React = require('react');

var Radium = require('radium');
import SelectField from 'material-ui/lib/SelectField';
import MenuItem from 'material-ui/lib/menus/menu-item';
import GoogleMap from 'google-map-react';
import { Link } from "react-router"
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


var style = {
	outerContainer:{
	   textAlign: 'center',
	   marginTop: '20px'
	},
	inputContainer:{
		display: 'inline-block',
		width: '70%',
		maxWidth: '400px',
		height: '223px',
		verticalAlign: 'top',
		textAlign: 'center'
	},
	mapContainer:{
		display: 'inline-block',
		width: 'calc(30% - 10px)',
		maxWidth: '250px',
		verticalAlign: 'top',
		textAlign: 'center',
		height: '223px',
		marginLeft: '10px'
	},
	bottomContainer:{
		height: 'calc(400px - 223px)',
		width: '100%'
	},
	inputBase:{
		fontSize: '18px',
		lineHeight: '44px',
		border: 'solid 2px #fff',
		width: 'calc(100% - 15px)',
		outline: 'none',
		paddingLeft: '5px',
		paddingRight: '5px',
		marginBottom: '10px',
		transition: 'border 0.3s',
		verticalAlign: 'top',
		':focus': {
		     border: 'solid 2px #ddd'
		}
	},
	inputSmall:{
		width: 'calc(100% - 134px)',
		marginLeft: '10px',
	},
	picker: {
		underLine: {
			display: 'none'
		},
		style: {
			backgroundColor: '#fff',
			width: '100px',
			fontSize: '18px',
			paddingLeft: '10px',
		}
	},
	icon:{
		check:{
			backgroundImage: 'url(./images/icons/greenCheck.png)',
			backgroundSize: '100% 100%',
			width: '100px',
			height: '100px',
			display: 'inline-block'
		},
		uncheck:{

		}
	},
	button: {
			width: '90%',
			maxWidth: '500px',
			fontSize: '24px',
			fontWeight: '200',
			padding: '10px',
			backgroundColor: '#FF8D8D',
			marginTop: '10px',
			marginLeft: 'auto',
			marginRight: 'auto',
			color: '#fff',
			':hover':{
				backgroundColor: '#DE5050'
			}
	 },
	 link:{
		textDecoration: 'none'
	 }
}

var stateList = ('State AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ');

class Address extends React.Component {
	static defaultProps = {
	    center: {lat: 59.938043, lng: 30.337157},
	    zoom: 13,
	    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
	 };
	constructor(props) {
    super(props);
    
	
    this.handleStateChange = this.handleStateChange.bind(this);
    this.onAddressSelect = this.onAddressSelect.bind(this);
 	}
 	onAddressSelect(){
 		this.props.onAddressSelect();
 	}
 	componentWillMount(){
 		this.state = {
    		state : 0
    	};
 	}
 	handleStateChange = (event, index, state) => {
 		this.setState({
 			state: state
 		});
 	}
 	componentWillMount(){
 		window.scrollTo(0, 0);
 	}
	render(){
		var states = [];
		for (let i = 0; i < stateList.length; i++ ) {
		  states.push(<MenuItem value={i} key={i} primaryText={stateList[i]}/>);
		}

		return(
			<div>
				<ReactCSSTransitionGroup key="Group3" transitionName="fade" 
						transitionAppear = {true} transitionAppearTimeout = {500}
						transitionLeave = {true} transitionLeaveTimeout = {500}
						transitionEnter = {true} transitionEnterTimeout = {500}>
				<div style={ style.outerContainer }>
					<div style={ style.inputContainer }>
						<input key="street" placeholder="Street" style={[
							style.inputBase
							]} />
						<input key="streetTwo" placeholder="Apt/Unit #" style={[
							style.inputBase
							]} />
						<input key="city" placeholder="City" style={[
							style.inputBase
							]} />
						<SelectField 
							maxHeight={300} 
							underlineStyle={style.picker.underLine}
							style={style.picker.style}
							value={this.state.state} 
							onChange={this.handleStateChange}>
		       				 {states}
		      			</SelectField>
						<input key="postalCode" placeholder="Postal Code" style={[
							style.inputBase, 
							style.inputSmall
							]} />
						
					</div>
					<div style={ style.mapContainer }>
						<GoogleMap
					        defaultCenter={this.props.center}
					        defaultZoom={this.props.zoom}>
					    </GoogleMap>
					</div>
					<div style={ style.bottomContainer }>
						<div style={ style.icon.check }></div>
						<Link style={ style.link } to={`/${this.props.symbol}/checkout/pay`}>
							<div style={ style.button } onClick={ this.onAddressSelect }>Next</div>
						</Link>
					</div>
				</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}

};

module.exports = Radium(Address);
