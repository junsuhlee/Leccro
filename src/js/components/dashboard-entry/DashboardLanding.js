import React from "react";
var Radium = require('radium');
import { Link } from "react-router";


var style = {
			base: {
				width: '100%',
				height: 'calc(100vh - 74px)',
				minHeight: '350px',
				position: 'relative',
				WebKitBackgroundSize: 'cover',
				MozBackgroundSize: 'cover',
				OBackgroundSize: 'cover',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
				content: {
					left: '50%',
					top: '50%',
					position: 'absolute',
					transform: 'translate(-50%, -50%)',
				}
			},
			landingMain: {
				backgroundImage: 'url(../images/dashboard/dashboardLanding.png)',
				content: {
					fontSize: '42px',
					color: '#fff',
					fontWeight: '700',
				},
				button: {
					marginTop: '10px',
					cursor: 'pointer',
					border: '5px #fff solid',
					fontSize: '24px',
					fontWeight: '700',
					padding: '10px',
					':hover': {
						opacity: '0.7'
					}
				}
			}
		};


@Radium
class DashboardLanding extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div key="landingMain" style={[ style.base, style.landingMain ]}>
					<div key="landingMainContent" style={[ style.base.content, style.landingMain.content ]}>
						<p>Launch Your Brand</p>
						<p>Zero Risk</p>
						<p>Now</p>
						<div style={ style.landingMain.button }>Launch Brand</div>
					</div>
				</div>
				<div style={ style.base }>
					<div style={ style.base.content }>
						
					</div>
				</div>
			</div>
		);

	

	}

}




export default DashboardLanding;