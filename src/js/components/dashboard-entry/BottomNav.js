import React from "react";
var Radium = require('radium');
import StoreGrid from '../grid/StoreGrid';


import { connect } from 'react-redux';

var style = {
			bottomNav: {
				position: 'fixed',
				bottom: '0px',
				width: '100%',
				left: '0px',
				height: '74px',
				justifyContent: 'center',
				display: 'flex',
				backgroundColor: '#F0F0F0',
				opacity: '1',
				transition: 'opacity 0.3s ease-out'
			},
		};
		
@Radium
class BottomNav extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var	bottomNavStyle = {
				logo: {
					backgroundImage: 'url('+ this.props.logo +')',
					WebKitBackgroundSize: 'cover',
					MozBackgroundSize: 'cover',
					OBackgroundSize: 'cover',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center center',
					width: '70px',
					height: '70px'
				},
				infoHolder: {
					height: '70px',
					paddingLeft: '10px',
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					paddingTop: '5px',
					name:{

					},
					category:{
						color: '#777',
						fontSize: '12px'
					}
				},
				hide: {
					opacity: '0',
					transition: 'opacity 0.3s ease-out'
				}
			};

		
		return (
			<div style={[ style.bottomNav, !this.props.show && bottomNavStyle.hide ]}>
				<div style={ bottomNavStyle.logo }></div>
				<div style={ bottomNavStyle.infoHolder }>
					<p>{this.props.name}</p>
					<p style={ bottomNavStyle.infoHolder.category }>{ this.props.category }</p>
				</div>
			</div>
		);

	

	}

}

let mapStateToProps = (state) => {
    return {
        logo: state.dashboardBottomNav.logo,
        name: state.dashboardBottomNav.name,
        show: state.dashboardBottomNav.show,
        category: state.dashboardBottomNav.category
    };
}

BottomNav = connect(mapStateToProps)(BottomNav);

export default BottomNav;