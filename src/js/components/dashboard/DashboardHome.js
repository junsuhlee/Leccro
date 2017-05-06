import React from "react";
import { Link } from "react-router";
var Radium = require('radium');

import DashboardNewHome from "./DashboardNewHome";

class DashboardHome extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var style = {
			banner:{
				base: {
					textAlign: 'center',
					position: 'relative',
					width: '100%',
					height: '200px',
					background: 'url(' + this.props.banner + ') center center/cover no-repeat fixed',
					WebKitBackgroundSize: 'cover',
					MozBackgroundSize: 'cover',
					OBackgroundSize: 'cover',
				},
				logo:{
					backgroundImage: 'url('+ this.props.logo +')',
					WebKitBackgroundSize: 'cover',
					MozBackgroundSize: 'cover',
					OBackgroundSize: 'cover',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center center',
					width: '80px',
					height: '80px',
					marginLeft: 'auto',
					marginRight: 'auto',
					left: '0px',
					right: '0px',
					position: 'absolute',
					bottom: '5px',
					boxShadow: '0px 0px 5px 0px rgba(50, 50, 50, 0.75)'
				},
			},
			nameHolder:{
				base:{
					width: '100%',
					textAlign: 'center',
					backgroundColor: '#E3E3E3'
				},
				name:{
					fontWeight: '600',
					fontSize: '24px',
					color: 'rgba(0,0,0,0.70)',
					paddingTop: '15px',
					paddingBottom: '15px'
				},
				title:{
					fontWeight: '300',
					textAlign: 'left',
					fontSize: '45px',
					paddingTop: '15px',
					paddingBottom: '15px'
				}
			},
			button: {
				halfButton: {
					container: {
						width: '100%',
						display: 'flex',
						justifyContent: 'center'
					},
					base: {
						width: 'calc(100%)',
						height: '70px',
						color: '#fff',
						fontWeight: '700',
						fontSize: '24px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						cursor: 'pointer',
						':hover': {
							opacity: '0.7'
						}
					},
					orderIcon: {
						content: 'url(../../images/icons/dashboard/order.png)',
						height: '50px',
						marginRight: '10px'
					},
					inventoryIcon: {
						content: 'url(../../images/icons/dashboard/inventory.png)',
						height: '50px',
						marginRight: '10px'
					},
					redBackground: {
						backgroundColor: '#C15959'
					},
					greenBackground:{
						backgroundColor: '#55C289'
					},
					link: {
						margin: '5px',
						width: 'calc(50% - 10px)',
						textDecoration: 'none'
					}
				}
			},
			
		};
		switch(this.props.status){
			case 'new':
			return (
				<DashboardNewHome data={ this.props } />
			);
			default:
			return (
				<div style={{ width: '100%'}}>
					<div 
						style={
							style.banner.base
						}>
						<div style={ style.banner.logo }></div>
					</div>
					<div style={ style.nameHolder.base }>
						<p style={ style.nameHolder.name }>{ this.props.name }</p>
					</div>
					<div style={style.button.halfButton.container}>
						<Link style={style.button.halfButton.link} onClick={this.props.pageHandler.bind(this,'order')} to={`/dashboard/${this.props.symbol}/order`}>
						<div key="order" style={[style.button.halfButton.base, style.button.halfButton.redBackground]}>
							<img style={style.button.halfButton.orderIcon}/>
							Order
						</div>
						</Link>
						<Link style={style.button.halfButton.link} onClick={this.props.pageHandler.bind(this,'inventory')} to={`/dashboard/${this.props.symbol}/inventory`}>
						<div key="inventory" style={[style.button.halfButton.base, style.button.halfButton.greenBackground]}>
							<img style={style.button.halfButton.inventoryIcon}/>
							Inventory
						</div>
						</Link>
					</div>
				</div>
			);
		}
		
	}
}

module.exports = Radium(DashboardHome);