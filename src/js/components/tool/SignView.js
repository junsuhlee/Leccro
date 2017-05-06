var Radium = require('radium');
var React = require('react');
import { Link, browserHistory } from "react-router";
import { connect } from 'react-redux';
import { hideSignView, tryLogin, loadingHandler } from '../../actions';

var $ = require('jquery');

import Loading from "../tool/Loading";

var style = {
	base: {
		backgroundColor: 'rgba(30,30,30,0.9)',
		position: 'fixed',
		top: '0px',
		left: '0px',
		right: '0px',
		bottom: '0px',
		zIndex: '5',
		opacity: '1',
		visibility: 'visible',
		transition: 'visibility 0s linear 0s, opacity 300ms'
	},
	hide: {
		visibility: 'hidden',
		opacity: '0',
		transition: 'visibility 0s linear 300ms, opacity 300ms'
	},
	closeButton:{
		position: 'absolute',
		top: '0px',
		right: '4px',
		width: '70px',
		height: '70px',
		cursor: 'pointer',
	    background: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgc3R5bGU9Im51bGwiIGZpbGw9IiNmZmZmZmYiID4gICAgPHBhdGggc3R5bGU9InRleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDtsaW5lLWhlaWdodDpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTtibG9jay1wcm9ncmVzc2lvbjp0YjstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOkJpdHN0cmVhbSBWZXJhIFNhbnMiIGQ9Ik0gNy43MTg3NSA2LjI4MTI1IEwgNi4yODEyNSA3LjcxODc1IEwgMjMuNTYyNSAyNSBMIDYuMjgxMjUgNDIuMjgxMjUgTCA3LjcxODc1IDQzLjcxODc1IEwgMjUgMjYuNDM3NSBMIDQyLjI4MTI1IDQzLjcxODc1IEwgNDMuNzE4NzUgNDIuMjgxMjUgTCAyNi40Mzc1IDI1IEwgNDMuNzE4NzUgNy43MTg3NSBMIDQyLjI4MTI1IDYuMjgxMjUgTCAyNSAyMy41NjI1IEwgNy43MTg3NSA2LjI4MTI1IHoiIGNvbG9yPSIjMDAwIiBvdmVyZmxvdz0idmlzaWJsZSIgZW5hYmxlLWJhY2tncm91bmQ9ImFjY3VtdWxhdGUiIGZvbnQtZmFtaWx5PSJCaXRzdHJlYW0gVmVyYSBTYW5zIj48L3BhdGg+PC9zdmc+) 50% 50% no-repeat #FF8D8D',
		':hover': {
			background: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgc3R5bGU9Im51bGwiIGZpbGw9IiNmZmZmZmYiID4gICAgPHBhdGggc3R5bGU9InRleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDtsaW5lLWhlaWdodDpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTtibG9jay1wcm9ncmVzc2lvbjp0YjstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOkJpdHN0cmVhbSBWZXJhIFNhbnMiIGQ9Ik0gNy43MTg3NSA2LjI4MTI1IEwgNi4yODEyNSA3LjcxODc1IEwgMjMuNTYyNSAyNSBMIDYuMjgxMjUgNDIuMjgxMjUgTCA3LjcxODc1IDQzLjcxODc1IEwgMjUgMjYuNDM3NSBMIDQyLjI4MTI1IDQzLjcxODc1IEwgNDMuNzE4NzUgNDIuMjgxMjUgTCAyNi40Mzc1IDI1IEwgNDMuNzE4NzUgNy43MTg3NSBMIDQyLjI4MTI1IDYuMjgxMjUgTCAyNSAyMy41NjI1IEwgNy43MTg3NSA2LjI4MTI1IHoiIGNvbG9yPSIjMDAwIiBvdmVyZmxvdz0idmlzaWJsZSIgZW5hYmxlLWJhY2tncm91bmQ9ImFjY3VtdWxhdGUiIGZvbnQtZmFtaWx5PSJCaXRzdHJlYW0gVmVyYSBTYW5zIj48L3BhdGg+PC9zdmc+) 50% 50% no-repeat #DE5050',
		}
	},
	signForm:{
		base: {
			position: 'absolute',
		    left: '50%',
		    top: '50%',
		    width: '90%',
		    maxWidth: '400px',
		    transform: 'translate(-50%,-50%)',
		    textAlign: 'center'
		},
		logo: {
			color: '#063C6F',
			width: '150px',
			content: 'url(/images/logo/logo.png)',
			small: {
				width: '50px'
			}
		},
		input: {
			fontSize: '16px',
			lineHeight: '35px',
			width: '100%',
			maxWidth:'350px',
			marginTop: '10px',
			border: 'solid 2px #fff',
  			outline: 'none',
			transition: 'border 0.3s',
		  	verticalAlign: 'top',
		  	textAlign: 'center',
			':focus': {
				border: 'solid 2px #BA4D23'
			}
		},
		button: {
			color: '#fff',
			fontSize: '24px',
			lineHeight: '41px',
			width: '100%',
			maxWidth:'350px',
			padding: '5px',
			marginTop: '10px',
			marginBottom: '10px',
			backgroundColor: '#536DEF',
  			outline: 'none',
			transition: 'background-color 0.3s',
		  	textAlign: 'center',
		  	cursor: 'pointer',
		  	border: 'none',
		  	':hover': {
				backgroundColor: '#132997'
			}
		},
		link: {
			fontSize: '12px',
			width: '100%',
			color: '#fff',
			textDecoration: 'none',
			cursor: 'pointer',
			':hover':{
				opacity: '0.8'
			}
		},
		passwordMatch: {
			fontSize: '12px',
			color: '#D62626'
		}
	}
};
@Radium
class SignView extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			showSignup: false
		};
		this.onClose = this.onClose.bind(this);
		this.onGoSignup = this.onGoSignup.bind(this);
		this.onSignup = this.onSignup.bind(this);
		this.onSignin = this.onSignin.bind(this);

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);

		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		this.handleLastNameChange = this.handleLastNameChange.bind(this);
		this.handleSignupEmailChange = this.handleSignupEmailChange.bind(this);
		this.handleSignupPasswordChange = this.handleSignupPasswordChange.bind(this);
		this.handleSignupConfirmPasswordChange = this.handleSignupConfirmPasswordChange.bind(this);

		this.showLoading = this.showLoading.bind(this);
		this.hideLoading = this.hideLoading.bind(this);
	}
	onClose() {
		this.props.onHideSignView();
		if(localStorage.getItem("signNavFrom") == 'none'){
  				return;
  		}
		browserHistory.push(localStorage.getItem('signNavFrom'));
	}
	onGoSignup() {
		this.setState({
			showSignup: true,
			passwordMatch: true,
		});
	}
	showLoading() {
		this.props.loadingHandler('SHOW_LOADING');
	}
	hideLoading() {
		this.props.loadingHandler('HIDE_LOADING');
		var user = firebase.auth().currentUser;
  		if(user){
  			this.onClose();
  		}
	}
	onSignin() {
		this.showLoading();
		var hideLoading = this.hideLoading;
		function signinSuccess(){
  			hideLoading();
  			if(localStorage.getItem("signNavTo") == 'none'){
  				return;
  			}
  			browserHistory.push(localStorage.getItem("signNavTo"));
  		};
		firebase.auth().signInWithEmailAndPassword(this.state.signinEmail, this.state.signinPassword).then(function(user) {
			tryLogin(true, user.email, ''); 
			signinSuccess();
		}).catch(function(error) {
					
		});
	}
	onSignup() {
		//loading open
		this.showLoading();
		var hideLoading = this.hideLoading;

  		function createAccountSuccess(){
  			hideLoading();
  			browserHistory.push(localStorage.getItem("signNavTo"));
  		};

		firebase.auth().createUserWithEmailAndPassword(this.state.signupEmail, this.state.signupPassword).then(function(user) {
	         createToken(user.uid);
	         tryLogin(true, user.email, '');
	         createAccountSuccess();	  
		}).catch(function(error) {
			  console.log(error);
			  //handle error
		});
	}
	//update inputs
	handleEmailChange(e) {
		this.setState({signinEmail: e.target.value});
	}
	handlePasswordChange(e) {
		this.setState({signinPassword: e.target.value});
	}

	handleFirstNameChange(e) {
		this.setState({signupFirstName: e.target.value});
	}
	handleLastNameChange(e) {
		this.setState({signupLastName: e.target.value});
	}
	handleSignupEmailChange(e) {
		this.setState({signupEmail: e.target.value});
	}
	handleSignupPasswordChange(e) {
		this.setState({signupPassword: e.target.value});
		if(this.state.signupConfirmPassword && this.state.signupConfirmPassword != e.target.value){
			this.setState({passwordMatch: false});
		}else if(this.state.signupConfirmPassword == e.target.value){
			this.setState({passwordMatch: true});
		}
	}
	handleSignupConfirmPasswordChange(e) {
		this.setState({signupConfirmPassword: e.target.value});
		if(this.state.signupPassword && e.target.value != this.state.signupPassword){
			this.setState({passwordMatch: false});
		}else if(e.target.value == this.state.signupPassword){
			this.setState({passwordMatch: true});
		}
	}
	componentWillMount(){
	}
	render() {
		var form = [];
		if(!this.state.showSignup){
			form.push(
				<div key="signinform" style={ style.signForm.base }>
					<img style={ style.signForm.logo } />
					<input key="email" onChange={ this.handleEmailChange } placeholder="email" style={ style.signForm.input } />
					<input key="password" onChange={ this.handlePasswordChange } placeholder="password" type="password" style={ style.signForm.input } />
					<button key="signbutton" onClick={ this.onSignin } style={ style.signForm.button }>Sign In</button>
					<p onClick={ this.onGoSignup } key="link" style={ style.signForm.link }>Pretty New? Create Account</p>
				</div>
			);
		}else{
			var passwordMatch = [];
			if(!this.state.passwordMatch){
				passwordMatch.push(
					<p style={ style.signForm.passwordMatch } key="passwordMatch">Password is not match</p>
				);
			}
			form.push(
				<div key="signupform" style={ style.signForm.base }>
					<img style={[ style.signForm.logo, style.signForm.logo.small ]} />
					<input key="firstName" onChange={ this.handleFirstNameChange } placeholder="firstName" style={ style.signForm.input } />
					<input key="lastName" onChange={ this.handleLastNameChange } placeholder="lastName" style={ style.signForm.input } />
					<input key="signup-email" onChange={ this.handleSignupEmailChange } placeholder="email" style={ style.signForm.input } />
					<input key="signup-password" onChange={ this.handleSignupPasswordChange } placeholder="password" type="password" style={ style.signForm.input } />
					<input key="signup-passwordconfirm" onChange={ this.handleSignupConfirmPasswordChange } placeholder="confirm password" type="password" style={ style.signForm.input } />
					{ passwordMatch }
					<button key="signup-button" onClick={ this.onSignup } style={ style.signForm.button }>Sign Up</button>
				</div>
			);
		}

		return (
			<div style={[ style.base, !this.props.show && style.hide ]}>
				<Loading ref="loading" />
				<div onClick={ this.onClose } style={ style.closeButton } ></div>
				{form}
			</div>
		);
	}
}

let mapStateToProps = (state) => {
    return {
        show: state.signView.show
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        onHideSignView: () => dispatch(hideSignView()),
        tryLogin: (success,email,uid) => dispatch(tryLogin(success,email,uid)),
        loadingHandler: (type) => dispatch(loadingHandler(type))
    }
}
 
SignView = connect(mapStateToProps, mapDispatchToProps)(SignView);

export default SignView;