import React from "react";
var Radium = require('radium');

import { connect } from 'react-redux';

var style = {
	base: {
		backgroundColor: '#fff',
		position: 'fixed',
		top: '0px',
		left: '0px',
		right: '0px',
		bottom: '0px',
		zIndex: '6',
		visibility: 'visible',
		transition: 'visibility 0s linear 0s, opacity 150ms'
	},
	hide: {
		visibility: 'hidden',
		opacity: '0',
		transition: 'visibility 0s linear 300ms, opacity 150ms'
	},
	loadingContainer: {
			position: 'absolute',
		    left: '50%',
		    top: '50%',
		    width: '50%',
		    transform: 'translate(-50%,-50%)',
		    textAlign: 'center'
	},
	grid: {
		base:{
			width: '23.333%',
			marginLeft: '5%',
			marginRight: '5%',
			height: '5px',
			display: 'inline-block',
			background: 'linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)',
			opacity: '0.7',
		},
		black:{
			opacity: '1.0',
		}
	},
	content:{
		fontWeight: '200',
		color: '#777',
		fontSize: '45px',
		padding: '20px',
	}
}
		
var timer;
@Radium
class Loading extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 0,
		};
		this.rotate = this.rotate.bind(this);
	}
    componentWillMount(){
    	
    }
    componentWillReceiveProps(newProps) {
    	if(newProps.show){
			timer = setInterval(this.rotate , 300);
		}
    }
	rotate(){
		if(this.state.step == 2){
			this.setState({
				step: 0
			});
		}else{
			this.setState({
				step: this.state.step + 1
			});
		}
	}
	render() {
		if(!this.props.show){
			clearInterval(timer);
		}
		return (
			<div
				key="loading"
				style={
					[style.base, !this.props.show && style.hide]
				}>
				<div style={ style.loadingContainer }>
					<div style={style.content}>{this.props.content}</div>
					<div style={[ style.grid.base, this.state.step == 0 && style.grid.black ]}></div>
					<div style={[ style.grid.base, this.state.step == 1 && style.grid.black ]}></div>
					<div style={[ style.grid.base, this.state.step == 2 && style.grid.black ]}></div>
				</div>
			</div>
		);

	

	}

}

let mapStateToProps = (state) => {
    return {
        show: state.loading.show,
        content: state.loading.content
    };
}


Loading = connect(mapStateToProps)(Loading);

export default Loading;