import React from "react";
import OrderList from "./list/OrderList";
var Radium = require('radium');


var data = [
	{
		summary: "Capuccino x2, Americano x1",
		type: "delivery",
		id: "0"
	},
	{
		summary: "Green Tea x2",
		type: "pickup",
		id: "1"
	},
	{
		summary: "Capuccino x1",
		type: "pickup",
		id: "2"
	},
	{
		summary: "Capuccino x2, Americano x1",
		type: "pickup",
		id: "3"
	},

];

var OrderFilter = Radium(class OrderFilter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		var style = {
			base:{
				width: '100%',
				backgroundColor: '#E3E3E3',
				position: 'absolute',
				top: '0px',
				zIndex: '1',
				transition: 'height 0.1s linear',
				before: {
					height: '0px'
				},
				after: {
					height: '200px'
				}
			},
			button:{
				collapse:{
					position: 'absolute',
					bottom: '0px',
					right: '50%',
					left: '50%',
					transform: 'translate(-50%)',
					cursor: 'pointer'
				}
			}

		};
		var filterStyle = [];
		filterStyle.push(style.base);
		if(this.props.filterLoaded){
			filterStyle.push(style.base.after);
		}else{
			filterStyle.push(style.base.before);
		}
		return (
			<div style={ filterStyle }>	
				<div style={ style.button.collapse }
				     onClick={this.props.onFilterClick} >
					<img src="https://maxcdn.icons8.com/Android/PNG/48/Arrows/collapse_arrow-48.png" title="Collapse Arrow" width="48"/>
				</div>
			</div>
		);
	}
});

class DashboardOrder extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: false
		};
	}
	onFilterClick = () =>{
		this.setState({
			filter : !this.state.filter
		});
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
		  			width:'calc(100% - 61px - 150px)',
		  			margin: '0px',
		  			padding: '0px',
		  			verticalAlign: 'top',
					':focus': {
				      border: 'solid 2px #ddd'
				    }
				},
				filterButton: {
					width: '148px',
					marginLeft: '3px',
					height: '45px',
					lineHeight: '35px',
					backgroundColor: '#E293EA',
					border: 'none',
					color: '#fff',
					cursor: 'pointer',
					fontSize: '24px',
					':hover': {
						backgroundColor: '#CA56D6',
						transition: 'background-color 0.2s ease'
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
			orderList:{
				base:{
					marginTop: '55px'
				}
			}
			
		};
		return (
			<div style={{ width: '100%'}}>
				<OrderFilter onFilterClick={this.onFilterClick} filterLoaded={this.state.filter} />
			
				<div key="searchBarContainer" style={ style.searchBar.base }>		
					<button style={ style.searchBar.searchButton } onClick={ this.onSearch }>
						<img class="icon icons8-Search-Filled" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '25px'}} src="https://maxcdn.icons8.com/iOS7/PNG/32/Very_Basic/search_filled-32.png"/>
					</button>
					<input style={ style.searchBar.searchBar } />
					<button onClick={this.onFilterClick} key="filter" style={ style.searchBar.filterButton }>
						Filter
					</button>
				</div>
				<div style={ style.orderList.base }>
					<OrderList data={data[0]} symbol={this.props.symbol} />
					<OrderList data={data[1]} symbol={this.props.symbol} />
					<OrderList data={data[2]} symbol={this.props.symbol} />
					<OrderList data={data[3]} symbol={this.props.symbol} />
				</div>
			</div>
		);
	}
}






module.exports = Radium(DashboardOrder);