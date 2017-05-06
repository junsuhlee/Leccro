import React from "react";
var Radium = require('radium');
var JQuery = require('jquery');

class MidGrid extends React.Component {

	render() {
		//init grid url
		var backgroundUrl = this.props.imgUrl;
		var color = this.props.color;
		if(backgroundUrl == "food" || backgroundUrl == "local"){
			backgroundUrl = "./images/grid/" + backgroundUrl + ".png";
		}

		var style = {
			base:{
				margin: '2.5px',
				display: 'inline-block',
				width: '225px',
				height: '225px',
				verticalAlign: 'top',
					':hover': {
				      opacity: '0.8',
				      boxShadow: 'rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px',
				      transition: 'box-shadow 0.3s ease'
				    },
				    '@media (max-width: 505px)': {
						width: '155px',
						height: '155px',
					}
			},
			image:{
				backgroundImage: 'url('+ backgroundUrl +')',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover'
			},
			color:{
				backgroundColor: color
			}
		};
		var gridStyle = [style.base];
		if(backgroundUrl){
			gridStyle.push(style.image);
		}
		if(color){
			gridStyle.push(style.color);
		}

		return (
			<div
				key="grid" 
				style={
					gridStyle
				}>
			</div>
		);
	}
}

module.exports = Radium(MidGrid);


