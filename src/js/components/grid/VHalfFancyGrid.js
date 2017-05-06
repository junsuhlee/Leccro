import React from "react";
var Radium = require('radium');
var JQuery = require('jquery');

class VHalfFancyGrid extends React.Component {

	render() {
		//init grid url

		var style = {
			base:{
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				display: 'inline-block',
				verticalAlign: 'top',
				position: 'relative',
				width: '225px',
				height: '225px',
				margin: '2.5px',
				'@media (max-width: 505px)': {
						width: '155px',
						height: '155px',
				}
			},
			topBase:{
				width: '110px',
				position: 'absolute',
				top: '0px',
				':hover': {
			      opacity: '0.8',
				  boxShadow: 'rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px',
				  transition: 'box-shadow 0.3s ease'
			    },
			    '@media (max-width: 505px)': {
						width: '75px',
				}
			},
			bottomBase:{
				width: '110px',
				position: 'absolute',
				bottom: '0px',
				':hover': {
			      opacity: '0.8',
				  boxShadow: 'rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px',
				  transition: 'box-shadow 0.3s ease'
			    },
			    '@media (max-width: 505px)': {
						width: '75px',
				}
			},
			leftTop:{
				left: '0px',
				height: '161px',
			    '@media (max-width: 505px)': {
						height: '110px',
				}
			},
			leftBottom:{
				left: '0px',
				height: '59px',
			    '@media (max-width: 505px)': {
						height: '40px',
				}
			},
			rightTop:{
				right: '0px',
				height: '74px',
			    '@media (max-width: 505px)': {
						height: '50px',
				}
			},
			rightBottom:{
				right: '0px',
				height: '146px',
			    '@media (max-width: 505px)': {
						height: '100px',
				}
			},
			pink:{
				backgroundColor: '#FFBABA'
			},
			green:{
				backgroundColor: '#4D774A'
			},
			gray:{
				backgroundColor: '#848484'
			},
			cardinal:{
				backgroundColor: '#803C3C'
			}
		};

		var leftTop = [style.leftTop,style.pink,style.topBase];
		var leftBottom = [style.leftBottom,style.gray,style.bottomBase];
		var rightTop = [style.rightTop,style.green,style.topBase];
		var rightBottom = [style.rightBottom,style.cardinal,style.bottomBase];


		return (
			<div 
				style={
					style.base
				}>
					<div style={ style.vHalfGridLeft }>
						<div key="leftTop" style={ leftTop }>	
						</div>
						<div key="leftBottom" style={ leftBottom }>	
						</div>
					</div>
					<div style={ style.vHalfGridRight }>
						<div key="rightTop" style={ rightTop }>	
						</div>
						<div key="rightBottom" style={ rightBottom }>		
						</div>
					</div>
			</div>
		);
	}
}

module.exports = Radium(VHalfFancyGrid);

