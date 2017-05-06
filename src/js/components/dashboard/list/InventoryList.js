import React from "react";
var Radium = require('radium');
import { Link } from "react-router";

var style = {
			base: {
				width: 'calc(100% - 10px)',
				overflowY: 'auto',
				margin: '5px',
				position: 'relative',
				backgroundColor: '#fff',
				paddingTop: '10px',
				paddingBottom: '10px',
				cursor: 'pointer',
				':hover': {
					backgroundColor: '#e0e0e0'
				}
			},
			nameHolder: {
				fontSize: '16px',
				fontWeight: '700',
				marginLeft: '10px',
				fontWeight: '700'
			},
			priceHolder: {
				fontSize: '24px',
				color: '#4E4E4E',
				fontWeight: '700',
				marginLeft: '10px',
				fontWeight: '700'
			},
			stockHolder: {
				position: 'absolute',
				top: '0px',
				bottom: '0px',
				right: '5px',
				textAlign: 'right',
				fontSize: '85px',
				color: '#4E4E4E',
				fontWeight: '700',
				leftSign: {
					fontSize: '24px'
				}
			},
			notonsale: {
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
			onsale: {
				backgroundColor: '#47C57F',
				textAlign: 'center',
				color: '#fff',
				paddingTop: '5px',
				paddingBottom: '5px',
				marginLeft: '10px',
				marginTop: '10px',
				width: '150px',
				fontWeight: '700'
			}
		};

		
class InventoryList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if(this.props.data.stock == -1){
			this.props.data.stock = '∞';
		}
		return (
			<div style={ style.base }>
				<p style={ style.nameHolder }>
					{ this.props.data.name }
				</p>
				<p style={ style.priceHolder }>
					${ this.props.data.price.toFixed(2) }
				</p>
				<div key="type" style={[ this.props.data.status == 'onsale' && style.onsale,
				this.props.data.status == 'notonsale' && style.notonsale]}>
				{ this.props.data.status.charAt(0).toUpperCase()}{this.props.data.status.slice(1) }
				</div>
				<div style={ style.stockHolder }>
					{ this.props.data.stock }
					<span style={ style.stockHolder.leftSign }>Left</span>
				</div>
			</div>
		);

	

	}

}

module.exports = Radium(InventoryList);