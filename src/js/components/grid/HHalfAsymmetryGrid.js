import React from "react";
var Radium = require('radium');
var JQuery = require('jquery');

class HHalfAsymmetryGrid extends React.Component {

	render() {
		//init grid url
		var backgroundUrl = this.props.imgUrl;
		if(backgroundUrl == "news" && backgroundUrl){
			backgroundUrl = "images/grid/" + backgroundUrl + ".png";
		}
		var style = {
			base:{
				display: 'inline-block',
				verticalAlign: 'top'
			},
			hHalfGrid:{
				width: '225px',
				marginTop: '2.5px',
				marginBottom: '2.5px',
				marginLeft: '2.5px',
				marginRight: '2.5px',
				':hover': {
			      opacity: '0.8',
				  boxShadow: 'rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px',
				  transition: 'box-shadow 0.3s ease'
			    },
			    '@media (max-width: 505px)': {
						width: '155px',
				}
			},
			top:{
				height: '161px',
				marginBottom: '5px',
				'@media (max-width: 505px)': {
						height: '110px',
				}
			},
			bottom:{
				height: '59px',
				'@media (max-width: 505px)': {
						height: '40px',
				}
			},
			image:{
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundImage: 'url('+ backgroundUrl +')'
			},
			carrot:{
				backgroundColor: '#CA7171'
			}
		};
		var top = [style.hHalfGrid, style.top];
		var bottom = [style.hHalfGrid, style.bottom, style.carrot];
		if(backgroundUrl){
			top.push(style.image);
		}
		
		return (
			<div 
				style={
					style.base
				}>
					<div key="top" style={ top }>
					</div>
					<div key="bottom" style={ bottom }>
					</div>
			</div>
		);
	}
}

module.exports = Radium(HHalfAsymmetryGrid);