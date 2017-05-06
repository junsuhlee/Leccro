import React from "react";
var Radium = require('radium');

		
class SupportPanel extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var style = {
			base: {
				width: '50px',
				display: 'flex',
				color: '#68C1E7',
			},
			supported: {
					backgroundColor: '#82D1AA'
			},
			supportedText: {
					transform: 'rotate(-90deg)',
					transformOrigin: 'left top -100px'
			},
			mapContainer: {
				display: 'inline',
				width: '100px',
				height: '300px'
			},
			console: {
				base: {
					width: '50px',
					height: '50px',
					backgroundSize: '100% 100%',
					cursor: 'pointer',
					backgroundColor: '#82D1AA'
				},
				support:{
					backgroundImage: 'url(/images/icons/store/support.png)'
				},
			}
		};
		return (
			<div 
				style={[
					style.base, this.props.supported && style.supported 
				]}>
				<div style={[style.console.base]}>
				</div>
			</div>
		);

	

	}

}

module.exports = Radium(SupportPanel);