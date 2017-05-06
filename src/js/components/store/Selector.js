import React from "react";
var Radium = require('radium');


var style = {
	base: {
		position: 'relative',
		width: '100%',
		borderTop: '1px #ddd solid',
		borderBottom: '1px #ddd solid',
		backgroundColor: '#fafafa',
	},
	option: {
				optionName:{
					fontSize: '12px',
				},
				base: {
					color: '#430000',
					width: '120px',
					borderTop: '2px solid transparent',
					borderBottom: '2px solid transparent',
					justifyContent: 'center',
					alignItems: 'center',
					display: 'inline-block',
					padding: '5px',
					cursor: 'pointer',
					transition: 'border-bottom 0.3s ease-out'
				},
				selected: {
					color: '#D74444',
					borderTop: '2px solid transparent',
					borderBottom: '2px solid #D74444',
					width: '120px',
					fontWeight: '800',
					justifyContent: 'center',
					alignItems: 'center',
					display: 'inline-block',
					padding: '5px',
					transition: 'border-bottom 0.3s ease-out'
				}
	},
}
		
var options;
class Selector extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			option: 0
		}
	}
	handleOptionChange = (index) => {
		this.setState({
			option: index
		});
		this.props.optionChange(this.props.options[index]);
    }
	generateOption(index){
		return(
			<div 
				key={index} 
				onClick={ () => this.handleOptionChange(index)} 
				style={this.state.option == index ? style.option.selected : style.option.base}
				>
				<div>
					<p style={style.option.optionName}>{ this.props.options[index] }</p>
				</div>
			</div>
		);
	}
	componentWillMount(){
		
	}
	render() {
		options = [];
		for(var i = 0 ; i < this.props.options.length ; i ++){
			var temp = this.generateOption(i);
			options.push(temp);
		}
		return (
			<div 
				style={
					style.base
				}>
				{ options }
			</div>
		);

	

	}

}

module.exports = Radium(Selector);