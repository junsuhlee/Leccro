import React from "react";
var Radium = require('radium');
import { Link } from "react-router";

var style = {
			base: {
				width: 'calc(100% - 10px)',
				overflowY: 'auto',
				margin: '5px',
				backgroundColor: '#fff',
				paddingTop: '10px',
				color: '#000',
				textDecoration: 'none',
				paddingBottom: '10px',
				cursor: 'pointer',
				':hover': {
					backgroundColor: '#e0e0e0'
				}
			},
			orderHolder: {
				fontSize: '16px',
				fontWeight: '700',
				marginLeft: '10px',
				fontWeight: '700'
			},
			delivery: {
				backgroundColor: '#E26060',
				textAlign: 'center',
				color: '#fff',
				paddingTop: '5px',
				paddingBottom: '5px',
				marginLeft: '10px',
				marginTop: '10px',
				width: '150px',
				fontWeight: '700'
			},
			pickup: {
				backgroundColor: '#47C57F',
				textAlign: 'center',
				color: '#fff',
				paddingTop: '5px',
				paddingBottom: '5px',
				marginLeft: '10px',
				marginTop: '10px',
				width: '150px',
				fontWeight: '700'
			},
			link: {
				textDecoration: 'none'
			}

		};

		
class OrderList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Link style={style.link} to={`/dashboard/${this.props.symbol}/order/${this.props.data.id}`}>
				<div style={ style.base }>
					<p style={ style.orderHolder }>
						{ this.props.data.summary }
					</p>
					<div key="type" style={[ this.props.data.type == 'delivery' && style.delivery,
					this.props.data.type == 'pickup' && style.pickup]}>
					{ this.props.data.type.charAt(0).toUpperCase()}{this.props.data.type.slice(1) }
					</div>
				</div>
			</Link>
		);

	

	}

}

module.exports = Radium(OrderList);