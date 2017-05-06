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
	 link:{
		textDecoration: 'none'
	 }
}

@Radium
class LaunchLogo extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	logo: undefined
    };
    this.handleStateChange = this.handleStateChange.bind(this);
    this.onAddressSelect = this.onAddressSelect.bind(this);
    this.handleImage = this.handleImage.bind(this);
 	}
 	onAddressSelect(){
 		this.props.onAddressSelect();
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
 	handleImage = (e) => {
        var reader = new FileReader();
        var file = e.target.files[0];
        this.props.updateLaunch('UPDATE_LOGO', file);
        reader.onload = function(upload) {
        	this.props.updateLaunch('UPDATE_LOGOBASECODE', upload.target.result);
            this.setState({
                logo: upload.target.result,
            });
        }.bind(this);
        reader.readAsDataURL(file);
    }
	render(){
		var image;
		var logoHolder = [];

		if(this.props.logobase){
			this.state.logo = this.props.logobase;
		}
		if(this.state.logo){
			
			image = {
			background: 'url(' + this.state.logo + ') center center/cover no-repeat',
			WebKitBackgroundSize: 'cover',
			MozBackgroundSize: 'cover',
			OBackgroundSize: 'cover',
			}
			logoHolder.push(
				<div key="logoHolder" style={ style.logo.base }>
					<div key="logoHolderInner" style={[ style.logo.container, image ]}>
					</div>
				</div>
			);
		}else{
			image = undefined;
		}
		
		return(
			<div>
				<ReactCSSTransitionGroup key="Group" transitionName="fade" 
						transitionAppear = {true} transitionAppearTimeout = {500}
						transitionLeave = {true} transitionLeaveTimeout = {500}
						transitionEnter = {true} transitionEnterTimeout = {500}>
				<div style={ style.outerContainer }>
					<div style={ style.container }>
						{this.state.logo ? logoHolder : null}
						<div key="uploadButton" style={style.logo.uploadButton} for="file">
							<input type='file'
							 style={{ opacity: '0', top: '0px', bottom: '0px', cursor: 'pointer', left: '0px',width: '100%', position: 'absolute'}}
							 onChange={this.handleImage}
								 />
							Upload Logo
						</div>
						<Link style={ style.link } to="/launch/refundpolicy">
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
    	logobase: state.launch.logobase,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateLaunch: (type, content) => dispatch(updateLaunch(type, content)),
    }
}

LaunchLogo = connect(mapStateToProps, mapDispatchToProps)(LaunchLogo);
export default LaunchLogo;