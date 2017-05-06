import React from "react";
var Radium = require('radium');

class BigBannerGrid extends React.Component {

	render() {
		var style = {
			base:{
				display: 'inline-block',
				overflow: 'hidden',
				width: '100%',
				height: '300px',
				verticalAlign: 'top',
			},
			image:{
				width: '100%',
				height: '300px',
				zIndex: '-1',
				backgroundImage: 'url(images/grid/mainbanner.png)',
				backgroundPosition: 'center center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				WebKitBackgroundSize: 'cover',
				MozBackgroundSize: 'cover',
				OBackgroundSize: 'cover',
				// MozTransition: 'all .5s',
   	// 			WebkitTransition: 'all .5s',
    // 			transition: 'all .5s',
    // 			MozTransform: 'scale(1,1)',
				// WebkitTransform: 'scale(1,1)',
		  //   	transform: 'scale(1,1)',   
				// ':hover': {
				// 	  opacity: '0.8',
				//       boxShadow: 'rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px',
				// 	  MozTransform: 'scale(1.3,1.3)',
				// 	  WebkitTransform: 'scale(1.3,1.3)',
				// 	  transform: 'scale(1.3,1.3)',   
				//  },
			}
		};

		return (
				<div
					key="grid" 
					style={style.base}>
					<div style={style.image}>
					</div>
				</div>
		);
	}
}

module.exports = Radium(BigBannerGrid);