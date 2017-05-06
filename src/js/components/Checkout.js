var React = require('react');

var Radium = require('radium');
import { Link } from "react-router"


var style = {
	message: {
		width: '100%',
		fontSize: '35px',
		textAlign: 'center',
		marginTop: '76px',
	},
	carousel: {
		base:{
			textAlign: 'center'
		},
		indicator: {
			width: '30px',
			borderRadius: '15px',
			height: '30px',
			margin: '20px',
			display: 'inline-block'
		},
		selected: {
			backgroundColor: '#737373'
		},
		unselected: {
			backgroundColor: '#C2C2C2'
		}
	},
	link:{
		textDecoration: 'none'
	}

};

var message;
var symbol;
class Checkout extends React.Component {
	constructor(props) {
	    super(props);
	    var path = this.props.location.pathname;
		symbol = path.split("/")[1];
		if(symbol == undefined){
			symbol = path.split("#")[0];
		}
		var state = path.split("/")[3];
		if(state == undefined){
			state = 0;
		}else if(state == "address"){	
			state = 1;
		}else if(state == "pay"){	
			state = 2;
		}
	    this.state = {
	    	step : state
	    };
	    this.goInitialStep = this.goInitialStep.bind(this);
	    this.onMethodSelect = this.onMethodSelect.bind(this);
	    this.onAddressSelect = this.onAddressSelect.bind(this);
 	}
 	goInitialStep() {
 		window.scrollTo(0, 0);
 		this.setState({
 			step : 0
 		});
 	}
 	onMethodSelect(type) {
 		window.scrollTo(0, 0);
 		this.setState({
 			step : 1
 		});
 	}
 	onAddressSelect() {
 		window.scrollTo(0, 0);
 		this.setState({
 			step : 2
 		});
 	}
	render(){
		var path = this.props.location.pathname;
		var state = path.split("/")[3];
		if(state == undefined){
			message = "Choose Delivery Method";
			this.state.step = 0;
		}else if(state == "address"){	
			message = "Address";
			this.state.step = 1;
		}else if(state == "pay"){	
			message = "Payment";
			this.state.step = 2;
		}
		var child = React.Children.map(this.props.children,
      	 (child) => React.cloneElement(child, { onMethodSelect: this.onMethodSelect, onAddressSelect : this.onAddressSelect,symbol: symbol }));
		return(
			<div>
				<div style={ style.message }>{ message }</div>
				{child}
				<div style={style.carousel.base}>
					<Link style={style.link} to={`/${symbol}/checkout`}>
						<div onClick={this.goInitialStep} key="0" style={[style.carousel.indicator, this.state.step == 0 ? style.carousel.selected : style.carousel.unselected]}></div>
					</Link>
					<Link style={style.link} to={`/${symbol}/checkout/address`}>
						<div onClick={this.onMethodSelect} key="1" style={[style.carousel.indicator, this.state.step == 1 ? style.carousel.selected : style.carousel.unselected]}></div>
					</Link>
					<Link style={style.link} to={`/${symbol}/checkout/pay`}>
						<div onClick={this.onAddressSelect} key="2" style={[style.carousel.indicator, this.state.step == 2 ? style.carousel.selected : style.carousel.unselected]}></div>
					</Link>
				</div>
			</div>
		);
	}

};

module.exports = Radium(Checkout);