var React = require('react');
var Radium = require('radium');
import { Link } from "react-router"

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

import { connect } from 'react-redux';
import { updateLaunch } from '../../actions';

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
		width: 'calc(100% - 15px)',
		textAlign: 'center',
		outline: 'none',
		paddingLeft: '5px',
		paddingRight: '5px',
		transition: 'border 0.3s',
		verticalAlign: 'top',
		':focus': {
		     border: 'solid 2px #ddd'
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
class LaunchDescription extends React.Component {
	constructor(props) {
    	super(props);
    	this.handleStateChange = this.handleStateChange.bind(this);
    	this.onInputChange = this.onInputChange.bind(this);
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
 	onInputChange(e) {
 		this.props.updateLaunch('UPDATE_DESCRIPTION', e.target.value);
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
						<input key="description" onChange={ this.onInputChange } value={this.props.description} placeholder="One line description" style={[
							style.inputBase
							]} />
						<Link style={ style.link } to="/launch/category">
							<div style={ style.button }>Next</div>
						</Link>
					</div>
				</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}

};

let mapStateToProps = (state) => {
    return {
        description: state.launch.description
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateLaunch: (type, content) => dispatch(updateLaunch(type, content)),
    }
}

LaunchDescription = connect(mapStateToProps, mapDispatchToProps)(LaunchDescription);

export default LaunchDescription;