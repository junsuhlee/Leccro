import React from "react";
var Radium = require('radium');


class Banner extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var style = {
			base:{
				minWidth: '250px',
				backgroundColor: '#fff',
				borderRight: '1px solid #ddd',
				'@media (max-width: 505px)': {
					minWidth: '100%',
				}
			},
			banner:{
				base: {
					marginTop: '54px',
					textAlign: 'center',
					position: 'relative',
					width: '100%',
					height: '200px',
					background: 'url(' + this.props.data.banner + ') center center/cover no-repeat',
					WebKitBackgroundSize: 'cover',
					MozBackgroundSize: 'cover',
					OBackgroundSize: 'cover',
					transform: 'translateZ(-1px)'
			},	
			logo:{
					backgroundImage: 'url('+ this.props.data.logo +')',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					position: 'absolute',
					top: '25px',
					left: '0',
					right: '0',
					marginLeft: 'auto',
					marginRight: 'auto',
					width: '150px',
					backgroundColor: '#fff',
					height: '150px',
					marginLeft: 'auto',
					marginRight: 'auto',
				
					// boxShadow: '0px 0px 5px 0px rgba(50, 50, 50, 0.75)'
				},
			},
			nameHolder:{
				base:{
					position: 'relative',
					width: '100%',
					textAlign: 'center',
					backgroundColor: '#fff',
					paddingTop: '5px',
					paddingBottom: '15px',
					transform: 'translateZ(0)',
				},
				name:{
					fontSize: '24px',
					color: '#333',
					paddingTop: '5px',
				}
			},
			descriptionHolder: {
				marginTop: '30px',
				color: '#6F6F6F',
				backgroundColor: '#fff',
				fontSize: '12px',
				textAlign: 'center',
				paddingTop: '5px',
				
			},
			buttonHolder:{
				base:{
					textAlign: 'center'
				}
			},
			button:{
				follow:{
					opacity: '0.7',
					width: '80%',
					display: 'inline-block',
					textAlign: 'center',
					color: '#fafafa',
					fontSize: '24px',
					lineHeight: '40px',
					margin: '2%',
					cursor: 'pointer',
					backgroundColor: '#1E6299',
					':hover':{
						opacity: '1.0'
					}
				},
				half:{
					base:{
						opacity: '0.7',
						width: '38%',
						lineHeight: '40px',
						color: '#fafafa',
						fontSize: '12px',
						display: 'inline-block',
						margin: '2%',
						cursor: 'pointer',
						':hover':{
							opacity: '1.0'
						}
					},
					info:{
						backgroundColor: '#246E2B',
					},
					map:{
						backgroundColor: '#EAD026',
					},
					
				}
			}
			
		};
		
		return (
			<div style={ style.base }>
				<div style={ style.banner.base }>
					<div style={ style.banner.logo }></div>
				</div>
				<div style={ style.nameHolder.base }>
					
					<p style={ style.descriptionHolder} > { this.props.data.description } </p>
					<p style={ style.nameHolder.name }>{ this.props.data.name }</p>
				</div>
				<div style={ style.buttonHolder.base }>
					<div style={ style.button.follow }>Follow</div>
					<div key="info" style={[ style.button.half.base, style.button.half.info ]}>
						Info</div>
					<div key="map" style={[ style.button.half.base, style.button.half.map ]}>
						Map</div>
				</div>
			</div>
		);
	}
}

module.exports = Radium(Banner);