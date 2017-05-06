var React = require('react');
var Radium = require('radium');
import { browserHistory } from "react-router"

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

import { connect } from 'react-redux';
import { loadingHandler } from '../../actions';

var style = {
	base:{
	   position: 'fixed',
	   bottom: '10px',
	   right: '10px',
	   padding: '10px',
	   fontSize: '35px',
	   color: '#fff',
	   cursor: 'pointer',
	   backgroundColor: '#0CAE8C',
	   boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
	   transition: 'visibility 0.3s ease'
	},
	hide: {
		visibility: 'hidden',
		transition: 'visibility 0.3s ease'
	}
}

@Radium
class Launcher extends React.Component {
	constructor(props) {
    	super(props);
    	this.launch = this.launch.bind(this);
 	}
 	componentWillMount(){
 		this.state = {
    		show : false
    	};
 	}
 	launch() {
 		this.props.loadingHandler('SHOW_LOADING', 'Finalizing Launch' + this.props.name);
 		var storageRef = firebase.storage().ref();
 		var uploadTask = storageRef.child('logo/' + this.props.symbol + '.png').put(this.props.logo);
 		function storeMetadata(ref) {
 			var payload = {
 				name: ref.props.name,
			    category: ref.props.category,
			    logo: ref.state.logoUrl,
			    description: ref.props.description,
			    refundPolicy: ref.props.refundPolicy,
			    ownBy: ref.props.uid,
			    symbol: ref.props.symbol,
			    status: 'new'
 			};
 			if(ref.props.refundPolicy == 0){
 				payload.refundCondition = ref.props.refundPolicyCondition;
 				payload.refundPolicyInstruction = ref.props.refundPolicyInstruction;
 			}
 			var updates = {};
 			var user = firebase.auth().currentUser;
 			updates['/brand/' + ref.props.symbol] = payload;
 			updates['/user/' + user.uid + '/own/' + ref.props.symbol] = true;
 			var store = firebase.database().ref().update(updates);
			store.then(
		        function(val) {
		           //success
		           ref.props.loadingHandler('HIDE_LOADING');
		           browserHistory.push('/dashboard');
		    	}).catch(function(reason) {
		            
		     }.bind(ref));
 		};

 		uploadTask.on('state_changed', function(snapshot){
	
		}, function(error) {
		  // Handle unsuccessful uploads
		}, function() {
		  this.state.logoUrl = uploadTask.snapshot.downloadURL;
		  storeMetadata(this);
		}.bind(this));
 		
 	}
	render(){
		var hide = false;
		if(this.props.name == undefined ||
			this.props.category == undefined ||
			this.props.description == undefined ||
			this.props.logo == undefined ||
			this.props.symbol == undefined ||
			this.props.name == undefined ||
			this.props.refundPolicy == undefined ||
			this.props.name == '' ||
			this.props.category == '' ||
			this.props.description == '' ||
			this.props.symbol == ''){
			hide = true;
		}
		if(this.props.refundPolicy == 0 && (this.props.refundPolicyCondition == undefined || this.props.refundPolicyInstruction == undefined
			|| this.props.refundPolicyCondition == '' || this.props.refundPolicyInstruction == '')){
			hide = true;
		}
		return(
			<div>
				<ReactCSSTransitionGroup key="Group" transitionName="fade" 
						transitionAppear = {true} transitionAppearTimeout = {500}
						transitionLeave = {true} transitionLeaveTimeout = {500}
						transitionEnter = {true} transitionEnterTimeout = {500}>
				<div key="launch" onClick={ this.launch } style={[ style.base, hide && style.hide ]}>
					Launch!
				</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}

};
let mapStateToProps = (state) => {
    return {
    	name: state.launch.name,
    	category: state.launch.category,
    	description: state.launch.description,
    	logo: state.launch.logo,
    	refundPolicy: state.launch.refundPolicy,
    	refundPolicyCondition: state.launch.refundPolicyCondition,
    	refundPolicyInstruction: state.launch.refundPolicyInstruction,
        symbol: state.launch.symbol,
        uid: state.user.userId
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        loadingHandler: (type,content) => dispatch(loadingHandler(type,content)),
    }
}

Launcher = connect(mapStateToProps,mapDispatchToProps)(Launcher);

export default Launcher;