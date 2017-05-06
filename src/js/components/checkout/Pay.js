var React = require('react');

var Radium = require('radium');
import { Link } from "react-router"

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var style = {
	base:{
	   marginLeft: 'auto',
	   marginRight: 'auto',
	   width: '90%',
	   marginTop: '20px',
	   textAlign: 'center',
	   height: '400px',
	},
	itemList:{
		base:{
			textAlign: 'center',
			width: '100%'
		},
		holder:{

		},
		nameHolder:{
			fontSize: '22px'
		},
		optionHolder:{
			color: '#999999',
			fontSize: '14px'
		}
	},
	cardLogos: {
		content: 'url(./images/icons/card.png)',
		backgroundSize: '100%',
		width: '90%',
		marginTop: '15px',
		maxWidth: '300px',

	},
	card: {
		base: {
			width: '90%',
			marginTop: '15px',
			maxWidth: '300px',
			height: '100px',
			backgroundColor: '#FFB4B4',
			position: 'relative',
			marginLeft: 'auto',
			marginRight: 'auto',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			color: '#fff'
		},
		cardNumber:{
			fontWeight: '700'
		},
		cardCompany:{
			position: 'absolute',
			bottom: '5px',
			right: '10px',
			fontSize: '24px',
			fontWeight: '700'
		}

	},
	button: {
			width: '90%',
			maxWidth: '500px',
			fontSize: '24px',
			fontWeight: '200',
			padding: '10px',
			backgroundColor: '#01BC7D',
			marginTop: '15px',
			marginLeft: 'auto',
			marginRight: 'auto',
			color: '#fff',
			':hover':{
				backgroundColor: '#018459'
			}
	 },
	link:{
		color: '#fff',
		textDecoration: 'none'
	}
};


var Card = Radium(class Card extends React.Component{
	constructor(props){
    	super(props);
 	}
 	render(){
 		return(
 			<div style={ style.card.base }>
 				<p>**** **** **** { this.props.last4 }</p>
 				<div style={ style.card.cardCompany }>{ this.props.cardCompany }</div>
 			</div>
 		);
 	}
});

var items;
var itemList;
var totalPrice;
class Pay extends React.Component{
	constructor(props){
    	super(props);
    	this.onMethodSelect = this.onMethodSelect.bind(this);
 	}
 	onMethodSelect(type) {
 		this.props.onMethodSelect(type);
 	}
 	parseItems(){
 		var parse = JSON.parse(sessionStorage.getItem(this.props.symbol));
 		console.log(parse);
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
 			 	<p style={ style.itemList.nameHolder }>{item.name} {"$" + item.price}</p>
 			 	<p style={ style.itemList.optionHolder }>{item.optionHolder} {item.addonHolder}</p>
 			</div>
 		);
 	}
 	componentWillMount(){
 		window.scrollTo(0, 0);
 	}
	render(){
		itemList = [];
		this.parseItems();
		for(var i = 0 ; i < items.length; i++){
			itemList.push(this.generateItemList(i));
		}
		return(
			<div>
				<ReactCSSTransitionGroup key="Group" transitionName="fade" 
						transitionAppear = {true} transitionAppearTimeout = {500}
						transitionLeave = {true} transitionLeaveTimeout = {500}
						transitionEnter = {true} transitionEnterTimeout = {500}>
				<div style={ style.base } >
					<div style={ style.itemList.base }>
						{itemList}
					</div>
					<img style={ style.cardLogos } />
					<Card last4={ '1234' } cardCompany={ 'MasterCard' } />
					<Link style={ style.link } to={`/${this.props.symbol}/checkout/pay`}>
						<div style={ style.button } onClick={ this.onAddressSelect }>Buy</div>
					</Link>
				</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}

};


module.exports = Radium(Pay);