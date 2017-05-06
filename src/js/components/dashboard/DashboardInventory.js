import React from "react";
import InventoryList from "./list/InventoryList";
var Radium = require('radium');


var data = [
	{
		name: "Capuccino",
		price: 3.4,
		status: 'onsale',
		stock: -1
	},
	{
		name: "Americano",
		price: 2.1,
		status: 'onsale',
		stock: -1
	},
	{
		name: "Today's Special: Americano",
		price: 1.0,
		status: 'onsale',
		stock: 76
	},
	{
		name: "Green Tea",
		price: 2.4,
		status: 'onsale',
		stock: -1
	},

];
class DashboardInventory extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var style = {
			searchBar: {
				base: {
					width: 'calc(100% - 5px)',
					position: 'absolute',
					top: '3px',
					left: '0px',
					paddingLeft: '5px',
					paddingRight: '0px',
					transition: 'all 0.3s linear',
				},
				searchBar: {
					fontSize: '24px',
					lineHeight: '41px',
					border: 'solid 2px #fff',
		  			outline: 'none',
		  			transition: 'border 0.3s',
		  			width:'calc(100% - 61px)',
		  			margin: '0px',
		  			padding: '0px',
		  			verticalAlign: 'top',
					':focus': {
				      border: 'solid 2px #ddd'
				    }
				},
				searchButton: {
					backgroundColor: '#fff',
					position: 'relative',
					color: '#fff',
					borderTop: 'none',
					borderLeft: 'none',
					borderBottom: 'none',
					borderRight: '2px solid #F0F0F0',
					verticalAlign: 'top',
					outline: 'none',
					fontSize: '14px',
					paddingLeft: '12px',
					paddingRight: '12px',
					height: '45px',
					lineHeight: '35px'
				}
			},
			inventoryList:{
				base:{
					marginTop: '55px'
				}
			}
			
		};
		
		return (
			<div style={{ width: '100%'}}>
				<div key="searchBarContainer" style={ style.searchBar.base }>		
						<button style={ style.searchBar.searchButton } onClick={ this.onSearch }>
						<img class="icon icons8-Search-Filled" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '25px'}} src="https://maxcdn.icons8.com/iOS7/PNG/32/Very_Basic/search_filled-32.png"/>
						</button>
					<input style={ style.searchBar.searchBar } />
				</div>
				<div style={ style.inventoryList.base }>
					<InventoryList data={data[0]} />
					<InventoryList data={data[1]} />
					<InventoryList data={data[2]} />
					<InventoryList data={data[3]} />
				</div>
			</div>
		);
	}
}

module.exports = Radium(DashboardInventory);