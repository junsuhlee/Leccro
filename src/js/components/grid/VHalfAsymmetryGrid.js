import React from "react";
var Radium = require('radium');
var JQuery = require('jquery');

class VHalfAsymmetryGrid extends React.Component {
	render() {
		//init grid url
		var style = {
			base:{
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				display: 'inline-block',
				verticalAlign: 'top'
			},
			vHalfGrid:{
				height: '225px',
				margin: '2.5px',
				display: 'inline-block',
				':hover': {
			      opacity: '0.8',
				  boxShadow: 'rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px',
				  transition: 'box-shadow 0.3s ease'
			    },
			    '@media (max-width: 505px)': {
						height: '155px',
				}

			},
			left:{
				width: '81px',
			    '@media (max-width: 505px)': {
						width: '55px',
				}
			},
			right:{
				width: '139px',
				'@media (max-width: 505px)': {
						width: '95px',
				}
			},
			bluePurple:{
				backgroundColor: '#8D73FF'
			},
			carrot:{
				backgroundColor: '#FF7E7E'
			}
		};

		var left = [style.vHalfGrid, style.left, style.bluePurple];
		var right = [style.vHalfGrid, style.right, style.carrot];
		return (
			<div 
				style={
					style.base
				}>
					<div key="left" style={ left }>
					</div>
					<div key="right" style={ right }>
					</div>
			</div>
		);
	}
}

module.exports = Radium(VHalfAsymmetryGrid);