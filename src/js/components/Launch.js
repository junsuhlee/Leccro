var React = require('react');
var Radium = require('radium');
import { Link } from "react-router"

import Loading from "./tool/Loading"
import Launcher from "./launch/Launcher"

var style = {
	content:{
		base: {
			width: '100%',
			marginTop: '120px',

		},
		message: {
			width: '100%',
			fontSize: '35px',
			textAlign: 'center',
			marginTop: '76px',
		},
	},
	carousel: {
		base:{
			textAlign: 'center',
			width: '100%',
			marginTop: '30px'
		},
		indicator: {
			width: '30px',
			borderRadius: '15px',
			height: '30px',
			margin: '10px',
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

var savedData = {
	// name: 'Hotspot',
	// description: 'Always Best Quality',
	// logo: 'https://85ideas.com/wp-content/uploads/2015/07/HotSpot-Pizza-logo.jpg',
	// category: 'Pizza'
};

var message;
var symbol;
class Launch extends React.Component {
	constructor(props) {
	    super(props);
	    var path = this.props.location.pathname;
		symbol = path.split("/")[1];
		if(symbol == undefined){
			symbol = path.split("#")[0];
		}
		var state = path.split("/")[3];
		if(state == "name"){
			state = 0;
		}else if(state == "address"){	
			state = 1;
		}else if(state == "description"){	
			state = 2;
		}else if(state == "logo"){	
			state = 3;
		}else if(state == "refundpolicy"){	
			state = 4;
		}else if(state == "symbol"){	
			state = 5;
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
		var path = location.pathname;
		var state = path.split("/")[2];
		var props = {

		};
		if(state == "name"){
			message = "What is the name of your brand?";
			this.state.step = 0;
			//Continue with saved data
			props.name = savedData.name;
		}else if(state == "description"){	
			message = "Describe your brand in one sentence";
			this.state.step = 1;
			props.description = savedData.description;
		}else if(state == "category"){	
			message = "Specify the category of your brand";
			this.state.step = 2;
			props.category = savedData.category;
		}else if(state == "logo"){	
			message = "Upload your fantastic logo";
			this.state.step = 3;
			props.logo = savedData.logo;
		}else if(state == "refundpolicy"){	
			message = "Choose your refund policy";
			this.state.step = 4;
		}else if(state == "symbol"){	
			message = "Enter the symbol of your brand";
			this.state.step = 5;
		}

		var child = React.Children.map(this.props.children,
      	 (child) => React.cloneElement(child, props));
		return(
			<div>
				<Loading />
				<div style={ style.content.base }>
					<div style={ style.content.message }>{ message }</div>
					{child}
				</div>
				<div style={style.carousel.base}>
					<div>
						<Link style={style.link} to={`/launch/name`}>
							<div onClick={this.goInitialStep} key="0" style={[style.carousel.indicator, this.state.step == 0 ? style.carousel.selected : style.carousel.unselected]}></div>
						</Link>
						<Link style={style.link} to={`/launch/description`}>
							<div onClick={this.onMethodSelect} key="1" style={[style.carousel.indicator, this.state.step == 1 ? style.carousel.selected : style.carousel.unselected]}></div>
						</Link>
						<Link style={style.link} to={`/launch/category`}>
							<div onClick={this.onAddressSelect} key="2" style={[style.carousel.indicator, this.state.step == 2 ? style.carousel.selected : style.carousel.unselected]}></div>
						</Link>
						<Link style={style.link} to={`/launch/logo`}>
							<div onClick={this.onAddressSelect} key="2" style={[style.carousel.indicator, this.state.step == 3 ? style.carousel.selected : style.carousel.unselected]}></div>
						</Link>
						<Link style={style.link} to={`/launch/refundpolicy`}>
							<div onClick={this.onAddressSelect} key="2" style={[style.carousel.indicator, this.state.step == 4 ? style.carousel.selected : style.carousel.unselected]}></div>
						</Link>
						<Link style={style.link} to={`/launch/symbol`}>
							<div onClick={this.onAddressSelect} key="2" style={[style.carousel.indicator, this.state.step == 5 ? style.carousel.selected : style.carousel.unselected]}></div>
						</Link>
					</div>
				</div>
				<Launcher />
			</div>
		);
	}

};

module.exports = Radium(Launch);