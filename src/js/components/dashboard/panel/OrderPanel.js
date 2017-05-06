import React from "react";
var Radium = require('radium');
import LinearProgress from 'material-ui/lib/linear-progress';

var data = {
	'0' :{
		summary: "Capuccino x2, Americano x1",
		type: "delivery",
		status: 1,
		order: [{
			info:[{
				addon: ['Double Milk'],
				name: "Capuccino",
				option: ["Small", 0],
				price: 4.0
			},
			{
				addon: ['Whole Milk'],
				name: "Capuccino",
				option: ["Small", 0],
				price: 4.0
			}],
			name: "Capuccino",
			quantity: 2,
			totalPrice: 8.0
		},
		{
			info:[{
				addon: ['Double Shot'],
				name: "Americano",
				option: ["Small", 0],
				price: 2.0
			}],
			name: "Capuccino",
			quantity: 2,
			totalPrice: 2.0
		}]
	},
	'1' :{
		summary: "Green Tea x2",
		type: "pickup",
		status: 0,
		order: [{
			info:[{
				addon: ['Double Milk'],
				name: "Green Tea",
				option: ["Small", 0],
				price: 2.0
			},
			{
				addon: ['Whole Milk'],
				name: "Green Tea",
				option: ["Small", 0],
				price: 2.0
			}],
			name: "Green Tea",
			quantity: 2,
			totalPrice: 4.0
		}]
	},
	'2' :{
		summary: "Capuccino x1",
		type: "pickup",
		status: 1,
		order: [{
			info:[{
				addon: ['Double Milk'],
				name: "Capuccino",
				option: ["Small", 0],
				price: 4.0
			}],
			name: "Green Tea",
			quantity: 2,
			totalPrice: 4.0
		}]
	},
	'3' :{
		summary: "Capuccino x2, Americano x1",
		type: "pickup",
		status: 2,
		order: [{
			info:[{
				addon: ['Double Milk'],
				name: "Capuccino",
				option: ["Small", 0],
				price: 4.0
			},
			{
				addon: ['Whole Milk'],
				name: "Capuccino",
				option: ["Small", 0],
				price: 4.0
			}],
			name: "Capuccino",
			quantity: 2,
			totalPrice: 8.0
		},
		{
			info:[{
				addon: ['Double Shot'],
				name: "Americano",
				option: ["Small", 0],
				price: 2.0
			}],
			name: "Capuccino",
			quantity: 2,
			totalPrice: 2.0
		}]
	},

};

var style = {
			base: {
				width: 'calc(100% - 10px)',
				margin: '5px',
				textAlign: 'center',
				color: '#333',
				position: 'relative',
				minHeight: '30px',
				paddingTop: '20px',
				paddingBottom: '20px'
			},
			whiteBackground: {
				backgroundColor: '#fafafa',
			},
			textHolder: {
				orderCodeHolder: {
					padding: '10px',
					fontSize: '28px',
					fontWeight: '600',
					color: '#333'
				},
				orderHolder: {
					padding: '10px',
					fontSize: '24px',
					fontWeight: '600'
				}
			},
			deliveryType: {
				delivery: {
					backgroundColor: '#E26060',
					textAlign: 'center',
					color: '#fff',
					paddingTop: '5px',
					paddingBottom: '5px',
					marginLeft: 'auto',
					marginRight: 'auto',
					width: '150px',
					fontWeight: '700'
				},
				pickup: {
					backgroundColor: '#47C57F',
					textAlign: 'center',
					color: '#fff',
					paddingTop: '5px',
					paddingBottom: '5px',
					marginLeft: 'auto',
					marginRight: 'auto',
					width: '150px',
					fontWeight: '700'
				}
			},
			progressBar: {
				base: {
					height: '30px'
				},
				orderReceived: {
					foreground: '#C55252',
					background: '#FFD2D2',
					text: {
						color: '#C55252',
						position: 'absolute',
						left: '0px',
						backgroundColor: 'transparent',
						paddingLeft: '10px',
						paddingRight: '10px',
						fontSize: '18px',
						lineHeight: '30px',
						fontWeight: '700',
						outline: 'none',
						border: 'none'
					}
				},
				inProcess: {
					foreground: '#BDA228',
					background: '#EFDFB1',
					text: {
						color: '#BDA228',
						margin: 'auto',
						width: '150px',
						textAlign: 'center',
						lineHeight: '30px',
						fontSize: '18px',
						fontWeight: '700',
						cursor: 'pointer',
						backgroundColor: 'transparent',
						outline: 'none',
						border: 'none',
						':hover':{
							backgroundColor: '#EFDFB1',
							transition: 'all 0.3s ease'
						}
					},
					textDisabled: {
						color: '#BDA228',
						margin: 'auto',
						width: '150px',
						textAlign: 'center',
						fontSize: '18px',
						fontWeight: '700',
						lineHeight: '30px',
						backgroundColor: 'transparent',
						outline: 'none',
						border: 'none',
					}
				},
				finished: {
					foreground: '#21B031',
					background: '#8DEBB6',
					text: {
						color: '#21B031',
						position: 'absolute',
						right: '0px',
						top: '2px',
						paddingLeft: '10px',
						paddingRight: '10px',
						lineHeight: '30px',
						fontSize: '18px',
						fontWeight: '700',
						cursor: 'pointer',
						backgroundColor: 'transparent',
						outline: 'none',
						border: 'none',
						':hover':{
							backgroundColor: '#8DEBB6',
							transition: 'all 0.3s ease'
						}
					},
					textDisabled: {
						color: '#21B031',
						position: 'absolute',
						right: '0px',
						top: '2px',
						paddingLeft: '10px',
						paddingRight: '10px',
						lineHeight: '30px',
						fontSize: '18px',
						fontWeight: '700',
						backgroundColor: 'transparent',
						outline: 'none',
						border: 'none',
					}
				},
				opacity: {
					opacity: '0.5',
					fontWeight: '400'
				}
			},
			itemList:{
				base:{
					textAlign: 'center',
					width: '100%',

				},
				holder:{

					
				},
				nameHolder:{
					marginTop: '10px',
					fontSize: '22px'
				},
				optionHolder:{
					color: '#999999',
					fontSize: '14px',
					marginBottom: '10px'
				}
			},
		};


var symbol;
var orderId;
var path;
var totalPrice;
var items;
var itemList;
class OrderPanel extends React.Component {
	constructor(props) {
		super(props);
		path = this.props.location.pathname;
		symbol = path.split("/")[path.split("/").length - 4];
		orderId = path.split("/")[path.split("/").length - 1];
		this.state = {
			summary: data[orderId].summary,
			type: data[orderId].type,
			status: data[orderId].status,
			order: data[orderId].order
		};
		this.statusHandler = this.statusHandler.bind(this);
	}
	statusHandler(){
		this.setState({
			status: this.state.status + 1
		});
	}
	parseItems(){
		var parse = this.state.order;
		totalPrice = 0;
 		items = [];
 		for(var i = 0 ; i < parse.length; i++){
 			var name = parse[i].name;
 			totalPrice += parse[i].totalPrice;
 			for(var j = 0 ; j < parse[i].info.length; j++){
 				
 				var option = "";
 				var addon = "";
 				//parse option
 				option += parse[i].info[j].option[0] + "(+$" + parse[i].info[j].option[1].toFixed(2) + ")";
 				//parse addon
 				for(var o = 0; o < parse[i].info[j].addon.length; o++){
 					if(o == parse[i].info[j].addon.length - 1){
 						addon += parse[i].info[j].addon[o];
 					}else{
 						addon += parse[i].info[j].addon[o] + ",";
 					}
 				}
 				parse[i].info[j].optionHolder = option;
 				parse[i].info[j].addonHolder = addon;
 				parse[i].info[j].name = name;
 				items.push(parse[i].info[j]);
 			}
 		}
	}
	generateItemList(index){
 		var item = items[index];
 		item.name += " ";
 		return(
 			<div key={index}>
 			 	<p style={ style.itemList.nameHolder }>{index + 1}. {item.name} {"$" + item.price.toFixed(2)}</p>
 			 	<p style={ style.itemList.optionHolder }>{item.optionHolder} {item.addonHolder}</p>
 			</div>
 		);
 	}
	render() {
		
		var barForeground;
		var barBackground;
		if(this.state.status == 0){
			barForeground = style.progressBar.orderReceived.foreground;
			style.progressBar.base.background = style.progressBar.orderReceived.background;
		}else if(this.state.status == 1){
			barForeground = style.progressBar.inProcess.foreground;
			style.progressBar.base.background = style.progressBar.inProcess.background;
		}else if(this.state.status == 2){
			barForeground = style.progressBar.finished.foreground;
			style.progressBar.base.background = style.progressBar.finished.background;
		}
		
		itemList = [];
		this.parseItems();
		for(var i = 0 ; i < items.length; i++){
			itemList.push(this.generateItemList(i));
		}

		return (
			<div style={{ width: '100%'}}>
				<div key="orderHolder" style={[ style.base, style.whiteBackground ]}>
					<p style={ style.textHolder.orderCodeHolder }>
						Order Code: { orderId }</p>	
					<p style={ style.textHolder.orderHolder }>{ this.state.summary }</p>
					<div key="type" style={[ this.state.type == 'delivery' && style.deliveryType.delivery,
					this.state.type == 'pickup' && style.deliveryType.pickup]}>
					{ this.state.type.charAt(0).toUpperCase()}{this.state.type.slice(1) }
					</div>		
				</div>
				<div style={ style.base }>
					<LinearProgress key="statusBar" mode="determinate" color={ barForeground } 
					style={ style.progressBar.base } value={this.state.status * 50 + 2} />
				</div>
				<div key="statusIndicator" style={[ style.base, {paddingTop: '3px', paddingBottom: '3px'} ]}>
					<button key="orderReceived" style={[ style.progressBar.orderReceived.text,  this.state.status != 0 && style.progressBar.opacity ]}>
						Order Received
					</button>
					<button key="inProcess" onClick={this.statusHandler} disabled={ this.state.status != 0 } 
						style={[ this.state.status == 0 && style.progressBar.inProcess.text, 
							this.state.status != 1 && style.progressBar.opacity,
							this.state.status != 0 && style.progressBar.inProcess.textDisabled ]}>
						In Process
					</button>
					<button key="finished" onClick={this.statusHandler} disabled={ this.state.status != 1 } 
						style={[ this.state.status == 1 && style.progressBar.finished.text,  
							this.state.status != 2 && style.progressBar.opacity,
							this.state.status != 1 && style.progressBar.finished.textDisabled ]}>
						Finished
					</button>
				</div>
				<div key="itemList" style={[ style.base, style.whiteBackground ]}>
						{itemList}
				</div>

			</div>
		);
	}
}

module.exports = Radium(OrderPanel);