var Radium = require('radium');
var React = require('react');
import { Link, browserHistory } from "react-router";


import SignView from "./SignView";
import Loading from "./Loading";
import NavBarLink from "./navBar/NavBarLink"


import { connect } from 'react-redux';
import { showSignView, tryLogin, showMainDropDown, hideMainDropDown } from '../../actions';




var style = {
			container: {
				backgroundColor: '#fafafa',
				margin: 'auto',
				position: 'fixed',
				top: '0px',
				zIndex: '2',
			},
			navConsoleContainer: {
					backgroundColor: '#fafafa',
					width: '100%',
					textAlign: 'right',
					position: 'absolute',
					height: '54px',
					right: '0px',
					top: '0px',
			},
			main: {
				container: {
					position: 'relative',
					width: '100%',
				},
			},
			mystore: {
				grid:{
					base:{
						width: '54px',
						height: '54px',
						display: 'inline-block',
						backgroundSize: '100% 100%',
						':hover':{
							backgroundColor: '#E3E3E3',
							transition: 'all 0.2s ease',
						}
					},
					newStore:{
						backgroundImage: 'url(/images/grid/newStore.png)'
					},
					cashOut:{
						backgroundImage: 'url(/images/grid/cashOut.png)'
					},
				}
			},
			search: {
				container: {
					height: '120px',
					width: '100%',
				},
				searchBarContainer: {
					width: '95%',
					maxWidth: '500px',
					position: 'absolute',
					top: '54px',
					left: '50%',
					transform: 'translate(-50%)',
					transition: 'all 0.3s linear',
					boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
					},
				searchBar: {
					fontSize: '24px',
					lineHeight: '41px',
					width:'calc(100% - 53px)',
					border: 'solid 2px #fff',
		  			outline: 'none',
				},
				searchButton: {
					backgroundColor: '#fff',
					position: 'relative',
					color: '#fff',
					border: 'none',
					verticalAlign: 'top',
					outline: 'none',
					paddingLeft: '12px',
					paddingRight: '12px',
					fontSize: '14px',
					height: '45px',
					lineHeight: '35px'
				}
			},
			
			logo: {
				position: 'absolute',
				top: '0px',
				left: '20px',
				color: '#063C6F',
				fontSize: '40px',
				lineHeight: '54px',
				height: '54px',
				fontWeight: '500',
				content: 'url(/images/logo/logo.png)',
				zIndex: '1'
			},
			normalBase:{
				height: '54px',
				width: '100%'
			},
			//for link
			link: {
				textDecoration: 'none',
				color: '#333'
			}
		};


@Radium
class NavBar extends React.Component {
	constructor(props) {
		super(props);
	    this.state = {
	    	searchValue: ''
	    };

	   
	    this.signRequire = this.signRequire.bind(this);
	  	
	  	this.onGoDashboard = this.onGoDashboard.bind(this);
	  	this.onGoLaunch = this.onGoLaunch.bind(this);

	  	this.onShowMainDropDown = this.onShowMainDropDown.bind(this);
	  	this.onHideMainDropDown = this.onHideMainDropDown.bind(this);
	}

  	signRequire(nav) {
  		if(nav == null){
  			localStorage.setItem("signNavTo", 'none');
  			localStorage.setItem("signNavFrom", 'none');
  			this.props.onShowSignView();
  			return;
  		}
  		localStorage.setItem("signNavTo", nav);
  		localStorage.setItem("signNavFrom", "/" + this.props.location.split('/')[1]);
  		if(nav == "/" + this.props.location.split('/')[1]){
  			localStorage.setItem("signNavFrom", "/");
  		}
  		this.props.onShowSignView();
  	}
  	onGoDashboard() {
  		if(this.props.logined){
  			browserHistory.push('/dashboard');
  		}else{
  			this.signRequire('/dashboard');
  		}
  	}
  	onGoLaunch() {
  		if(this.props.logined){
  			browserHistory.push('/launch/name');
  		}else{
  			this.signRequire('/dashboard');
  		}
  	}
  	onShowMainDropDown() {
  		this.props.onShowMainDropDown();
  	}
  	onHideMainDropDown() {
  		this.props.onHideMainDropDown();
  	}
  	componentWillMount() {
  		var tryLogin = this.props.tryLogin;
  		
  		firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		  	tryLogin(true, user.email, user.uid);	  
		  } else {
		    tryLogin(false, '', '');
		  }
		});

  	}

	render() {
		//css
		
		var containerStyle = [style.container];
		var searchBarStyle;
		var searchButtonStyle;
		var toolHolder = [];

		switch(this.props.location){
			case "/dashboard":
				containerStyle.push(style.normalBase);
				//mystore tool holder
				toolHolder.push(
						<div key="navConsoleContainer" style={ style.navConsoleContainer }>
								<div onClick={this.onGoLaunch} key="launch" style={[ style.mystore.grid.base, style.mystore.grid.newStore ]}>
								</div>
								<Link to="cashOut" style={ style.link }>
									<div key="cashOut" style={[ style.mystore.grid.base, style.mystore.grid.cashOut ]}>
									</div>
								</Link>
						</div>
				);
				break;
			default:
				containerStyle.push(style.normalBase);
				//Logined
				if(this.props.logined){
					toolHolder.push(
						<div key="navConsoleContainer" style={ style.navConsoleContainer }>
								<NavBarLink
									onMouseOutHandler={ this.onHideMainDropDown } 
									onMouseOverHandler={ this.onShowMainDropDown }
									dropdown={ true } 
									name={this.props.email} />		
						</div>
					);
				}else{
					//Not Logined
					toolHolder.push(
						<div key="navConsoleContainer" style={ style.navConsoleContainer }>
								<a onClick={ this.signRequire.bind(this,null) } style={ style.link }>
									<NavBarLink name="Sign In" />
								</a>
						</div>
					);
					
				};
				break;
		}


		return (
			<div>
				<SignView />
				<Loading />
				<div key="navBar" style={ containerStyle }>
					<Link to="/" style={ style.link }>
						<img style={ style.logo } />		
					</Link>
					{ toolHolder }
				</div>
			</div>
		);
	}
}
let mapStateToProps = (state) => {
    return {
        email: state.user.userEmail,
        logined: state.user.logined,
        location: state.user.location,
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        onShowSignView: () => dispatch(showSignView()),
        tryLogin: (success,email,uid) => dispatch(tryLogin(success,email,uid)),
        onShowMainDropDown: () => dispatch(showMainDropDown()),
        onHideMainDropDown: () => dispatch(hideMainDropDown())
    }
}

NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBar);


export default NavBar;