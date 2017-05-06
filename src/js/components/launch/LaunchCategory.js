var React = require('react');
var Radium = require('radium');
import AutoComplete from '../tool/Launch/AutoComplete';
import { Link } from "react-router"



var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


var style = {
	outerContainer:{
	   textAlign: 'center',
	   marginTop: '20px',
	},
	inputContainer:{
		paddingTop: '30px',
		width: '70%',
		maxWidth: '400px',
		verticalAlign: 'top',
		textAlign: 'center',
		margin:'auto'
	},
	inputBase:{
		fontSize: '18px',
		lineHeight: '44px',
		border: 'solid 2px #fff',
		width: '100%',
		textAlign: 'center',
		outline: 'none',
		transition: 'border 0.3s',
		verticalAlign: 'top',
		backgroundColor: '#fff',
		':focus': {
		     border: '2px solid #ddd',
		}
	},
	button: {
			fontSize: '24px',
			fontWeight: '200',
			padding: '10px',
			backgroundColor: '#FF8D8D',
			marginTop: '20px',
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

@Radium
class LaunchCategory extends React.Component {
	constructor(props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
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
 	onChange(e) {
 		console.log(e.target.value);
 	}
	render(){

		return(
			<div>

				<ReactCSSTransitionGroup key="Group" transitionName="fade" 
						transitionAppear = {true} transitionAppearTimeout = {500}
						transitionLeave = {true} transitionLeaveTimeout = {500}
						transitionEnter = {true} transitionEnterTimeout = {500}>
				<div style={ style.outerContainer }>
					<div style={ style.inputContainer }>
						<AutoComplete />
						<Link style={ style.link } to="/launch/logo">
							<div style={ style.button }>Next</div>
						</Link>
					</div>
				</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}

};



export default LaunchCategory;