import React from "react";
var Radium = require('radium');
var JQuery = require('jquery');
 
class VHalfGrid extends React.Component {

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
				width: '110px',
				height: '225px',
				margin: '2.5px',
				display: 'inline-block',
				':hover': {
			      opacity: '0.8',
				  boxShadow: 'rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px',
				  transition: 'box-shadow 0.3s ease'
			    },
			    '@media (max-width: 505px)': {
			    		width: '75px',
						height: '155px',
				}
			},
			purple:{
				backgroundColor: '#CC6FFF'
			},
			grayPurple:{
				backgroundColor: '#9B8DA2'
			}
		};

		var left = [style.vHalfGrid, style.grayPurple];
		var right = [style.vHalfGrid, style.purple];
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
module.exports = Radium(VHalfGrid);

