import React from "react";
var Radium = require('radium');


import SelectField from 'material-ui/lib/SelectField';
import MenuItem from 'material-ui/lib/menus/menu-item';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


var quantity;
var option = [];
var style = {
			base: {
				textAlign: 'center',
				paddingTop: '20px',
				paddingBottom: '50px',
			},
			totalPriceContainer:{
				position: 'fixed',
				bottom: '10px',
				right: '10px',
				fontSize: '35px',
				padding: '10px',
				backgroundColor: '#67A4FF',
				color: '#fff'
			},
			picker: {
				underLine: {
					display: 'none'
				},
				style: {
					backgroundColor: '#fff',
					width: '60px',
					fontSize: '24px',
					paddingLeft: '20px',
				}
			},
			option: {
				container: {
					width: '90%',
					maxWidth: '500px',
					justifyContent: 'center',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: '30px',
					display: 'flex',
				},
				optionName:{
					fontWeight: '200',
					fontSize: '24px',
				},
				optionPrice:{
					fontWeight: '200',
					fontSize: '16px',
				},
				base: {
					backgroundColor: '#ffffff',
					width: '120px',
					justifyContent: 'center',
					alignItems: 'center',
					display: 'flex',
					padding: '5px',
					transition: 'background-color 0.3s ease-out'
				},
				selected: {
					backgroundColor: '#D8D8D8',
					width: '120px',
					justifyContent: 'center',
					alignItems: 'center',
					display: 'flex',
					padding: '5px',
					transition: 'background-color 0.3s ease-out'
				}
			},
			addon: {
				container: {
					width: '90%',
					maxWidth: '500px',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: '30px',
				},
				addonName:{
					fontWeight: '200',
					fontSize: '24px',
				},
				base: {
					backgroundColor: '#ffffff',
					justifyContent: 'center',
					alignItems: 'center',
					display: 'flex',
					padding: '10px',
					transition: 'background-color 0.3s ease-out'
				},
				selected: {
					backgroundColor: '#D8D8D8',
					justifyContent: 'center',
					alignItems: 'center',
					display: 'flex',
					padding: '10px',
					transition: 'background-color 0.3s ease-out'
				}
			},
			addToOrderButton: {
				width: '90%',
				maxWidth: '500px',
				fontSize: '24px',
				fontWeight: '200',
				padding: '10px',
				backgroundColor: '#FF8D8D',
				marginTop: '30px',
				marginLeft: 'auto',
				marginRight: 'auto',
				color: '#fff',
				':hover':{
					backgroundColor: '#DE5050'
				}
			}
		};
class ProductOption extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quantity: 1,
			option: [0],
			basePrice: this.props.productData.price,
			price: [this.props.productData.price],
			addonNum: [0],
			totalPrice: this.props.productData.price,
			addon: [{
			}]
		};
		this.addToOrder = this.addToOrder.bind(this);
		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.handleAddonChange = this.handleAddonChange.bind(this);
		quantity = [];
		for (var i = 1; i < 16; i++ ) {
		  quantity.push(<MenuItem value={i} key={i} primaryText={`${i}`}/>);
		}
		if(this.props.productData.addon){
			for (var i = 0; i < this.props.productData.addon.length; i++ ) {
			  this.state.addon[0][this.props.productData.addon[i]] = false;
			}
		}
		
	}
	addToOrder = () => {
		var order = {
			name: this.props.productData.name,
			quantity: this.state.quantity,
			totalPrice: this.state.totalPrice,
			info: []
		};
		for(var i = 0; i < this.state.quantity; i ++){
			var temp = {
				option: this.props.productData.option[this.state.option[i]],
				price: this.state.price[i].toFixed(2),
				addon: []
			};
			for(var key in this.state.addon[i]){
				if(this.state.addon[i][key] == true){
					temp.addon.push(key);
				}
			}
			order.info.push(temp);
		}
		this.props.addToOrder(order);
	}
	handleOptionChange = (i, index) => {
		this.state.price[index] = this.state.basePrice + this.props.productData.option[i][1];
		this.state.option[index] = i;
		//update total price
		this.state.totalPrice = 0;
		for(var i = 0 ; i < this.state.quantity; i ++){
			this.state.totalPrice += this.state.price[i];
		}
		this.setState({
		});
    }
    handleAddonChange = (i, index) => {
    	if(this.state.addonNum[index] < this.props.productData.addonMax && !this.state.addon[index][this.props.data.addon[i]]){
    		this.state.addon[index][this.props.productData.addon[i]] = !this.state.addon[index][this.props.data.addon[i]];
			if(this.state.addon[index][this.props.productData.addon[i]]){
				this.state.addonNum[index] = this.state.addonNum[index] + 1;
				this.setState({
	    		});
			}else{
				this.state.addonNum[index] = this.state.addonNum[index] - 1;
				this.setState({
	    		});
			}
    	}else if(this.state.addon[index][this.props.productData.addon[i]]){
    		this.state.addon[index][this.props.productData.addon[i]] = !this.state.addon[index][this.props.data.addon[i]];
			this.state.addonNum[index] = this.state.addonNum[index] - 1;
			this.setState({
	    	});
    	}
    }

	handleQuantityChange = (event, index, quantity) => {
		for(var i = 0 ; i < quantity ; i++){
			if(this.state.option[i] == undefined){
				this.state.option[i] = 0;
				this.state.price[i] = this.state.basePrice;
				this.state.addonNum[i] = 0;
				this.state.addon[i] = {};
				if(this.props.productData.addon){
					for (var j = 0; j < this.props.productData.addon.length; j++ ) {
					  this.state.addon[i][this.props.productData.addon[j]] = false;
					}
				}
				
			}
		}
		//update total price
		this.state.totalPrice = 0;
		for(var i = 0 ; i < quantity; i ++){
			this.state.totalPrice += this.state.price[i];
		}
		this.setState({quantity : quantity});
	}
	generatePanel(index){
		return(
 			<div key={ index }>
					<div style={ style.option.container }>
			      			{this.props.productData.option && this.props.productData.option.map(function(opt, i) {
					          return <div 
					          			key={i} 
					          			onClick={ () => this.handleOptionChange(i, index)} 
					          			style={this.state.option[index] == i ? style.option.selected : style.option.base}>
					          			<div>
					          			<p style={style.option.optionName}>{ opt[0] }</p>
					          			<p style={style.option.optionPrice}>{ "+$" + opt[1].toFixed(2) }</p>
					          			</div>
					          		 </div>;
					        }.bind(this))}
				     </div>
			        <div style={ style.addon.container }>
		      			{this.props.productData.addon && this.props.productData.addon.map(function(addon, i) {
				          return <div 
				          			key={i} 
				          			onClick={ () => this.handleAddonChange(i, index)} 
				          			style={this.state.addon[index][addon] ? style.addon.selected : style.addon.base}
				          			>
				          			<div>
				          			<p style={style.addon.addonName}>{ addon }</p>
				          			</div>
				          		 </div>;
				        }.bind(this))}
			       </div>
			      </div>
		)
	}
	render() {
		

		//quantity
		var panels = [];
		for(var i = 0 ; i < this.state.quantity; i ++){
			var temp = this.generatePanel(i);
			panels.push(temp);
		}
		
			
		
		return (
			<div style={style.base}>
				<div style={style.totalPriceContainer}>
					{"$" + this.state.totalPrice.toFixed(2)}
				</div>
				<SelectField 
					maxHeight={300} 
					underlineStyle={style.picker.underLine}
					style={style.picker.style}
					value={this.state.quantity} 
					onChange={this.handleQuantityChange}>
       				 {quantity}
      			</SelectField>
      			{panels}
		        <div style={style.addToOrderButton} onClick={ this.addToOrder }>Add to Order</div>
			</div>
		);
	}
}

module.exports = Radium(ProductOption);