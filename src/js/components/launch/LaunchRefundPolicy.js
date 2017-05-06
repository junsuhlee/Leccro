var React = require('react');
var Radium = require('radium');
var JQuery = require('jquery');
import { Link } from "react-router"

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

import { connect } from 'react-redux';
import { updateLaunch } from '../../actions';

var style = {
	outerContainer:{
	   textAlign: 'center',
	   marginTop: '20px',
	},
	container:{
		paddingTop: '30px',
		width: '70%',
		maxWidth: '400px',

		verticalAlign: 'top',
		textAlign: 'center',
		margin:'auto'
	},
	subTitle:{
		fontWeight: '400',
		fontSize: '18px',
		color: '#777',
		marginBottom: '15px'
	},
	option: {
				container: {
					width: '90%',
					maxWidth: '500px',
					justifyContent: 'center',
					marginLeft: 'auto',
					marginRight: 'auto',
					display: 'flex',
				},
				optionName:{
					fontWeight: '500',
					fontSize: '18px',
					color: '#555'
				},
				optionExplain:{
					fontWeight: '700',
					fontSize: '9px',
					color: '#555'
				},
				base: {
					backgroundColor: '#ffffff',
					width: '120px',
					justifyContent: 'center',
					alignItems: 'center',
					display: 'flex',
					padding: '5px',
					transition: 'background-color 0.3s ease-out'
				},
				selected: {
					backgroundColor: '#D8D8D8',
					width: '120px',
					justifyContent: 'center',
					alignItems: 'center',
					display: 'flex',
					padding: '5px',
					transition: 'background-color 0.3s ease-out'
				}
			},
	logo:{
		base:{
			backgroundColor: '#ddd',
			height: '150px',
			width: '100%',
			position: 'relative',	
			marginBottom: '15px',
		},
		container:{
			position: 'absolute',
			top: '5px',
			marginLeft: 'auto',
			marginRight: 'auto',
			left: '0px',
			right: '0px',
			height: '140px',
			width: '140px',	
		},
		uploadButton:{
			backgroundColor: 'transparent',
			border: '0px',
			fontSize: '24px',
			color: '#777',
			
			position: 'relative',
			padding: '10px',
			':hover':{
				backgroundColor: '#E0E0E0',
				transition: 'all 0.3s ease'
			}
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
	 textarea: {
	 	width: '100%',
		maxWidth: '380px',
	 	border: 'none',
	 	fontSize: '14px',
	 	height: '120px',
	 	padding: '10px',
	 	outline: 'none',
	 	resize: 'none'

	 },
	 link:{
		textDecoration: 'none'
	 }
}


@Radium
class LaunchRefundPolicy extends React.Component {
	constructor(props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);

    this.onRefundInstruction = this.onRefundInstruction.bind(this);
    this.onRefundConditionChange = this.onRefundConditionChange.bind(this);
 	}
 	handleOptionChange = (index) => {
		this.setState({
			option: index
		});
		this.props.updateLaunch('UPDATE_REFUNDPOLICY', index);
		
    }
 	componentWillMount(){
 		this.state = {
    		state : 0,
    	};
 	}
 	handleStateChange = (event, index, state) => {
 		this.setState({
 			state: state
 		});
 	}
 	onRefundInstruction(e) {
 		this.props.updateLaunch('UPDATE_REFUNDINSTRUCTION', e.target.value);
 	}
 	onRefundConditionChange(e) {
 		this.props.updateLaunch('UPDATE_REFUNDCONDITION', e.target.value);
 	}
	render(){
		var textareaHolder = [];
		if(this.props.refundPolicy == 0){
			textareaHolder.push(
				<ReactCSSTransitionGroup key="Group1" transitionName="fade" 
						transitionAppear = {true} transitionAppearTimeout = {500}
						transitionLeave = {true} transitionLeaveTimeout = {500}
						transitionEnter = {true} transitionEnterTimeout = {500}>
					<div key="textareaHolder" style={{ marginTop: '15px' }}>
								<h3 style={ style.subTitle }>Specify refund condition</h3>
								<textarea value={this.props.refundPolicyCondition} key="area1" onChange={this.onRefundConditionChange} style={[ style.textarea, { marginBottom: '15px' } ]} />
								<h3 style={ style.subTitle }>Enter refund instruction</h3>
								<textarea value={this.props.refundPolicyInstruction} onChange={this.onRefundInstruction} style={ style.textarea } />
					</div>
				</ReactCSSTransitionGroup>
			);
		}
		return(
			<div>
				<ReactCSSTransitionGroup key="Group" transitionName="fade" 
						transitionAppear = {true} transitionAppearTimeout = {500}
						transitionLeave = {true} transitionLeaveTimeout = {500}
						transitionEnter = {true} transitionEnterTimeout = {500}>
				<div style={ style.outerContainer }>
					<div style={ style.container }>
						<h3 style={ style.subTitle }>Do you offer refund service?</h3>
						<div style={ style.option.container }>
							<div 
						         key="0"
						         onClick={ () => this.handleOptionChange(0)} 
						         style={this.props.refundPolicy == 0 ? style.option.selected : style.option.base}>
						         <div>
						         <p style={style.option.optionName}>Yes</p>
						         <p style={style.option.optionExplain}>Highly Recommanded</p>
						         </div>
						    </div>
						    <div 
						         key="1"
						         onClick={ () => this.handleOptionChange(1)} 
						         style={this.props.refundPolicy == 1 ? style.option.selected : style.option.base}>
						         <div>
						         <p style={style.option.optionName}>No</p>
						         </div>
						    </div>
						    <div 
						         key="2"
						         onClick={ () => this.handleOptionChange(2)} 
						         style={this.props.refundPolicy == 2 ? style.option.selected : style.option.base}>
						         <div>
						         <p style={style.option.optionName}>Decide this Later</p>
						         </div>
						    </div>
					    </div>
					    {textareaHolder}
						<Link style={ style.link } to="/launch/symbol">
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
    	refundPolicy: state.launch.refundPolicy,
        refundPolicyCondition: state.launch.refundPolicyCondition,
        refundPolicyInstruction: state.launch.refundPolicyInstruction,
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateLaunch: (type, content) => dispatch(updateLaunch(type, content)),
    }
}

LaunchRefundPolicy = connect(mapStateToProps, mapDispatchToProps)(LaunchRefundPolicy);

export default LaunchRefundPolicy;
