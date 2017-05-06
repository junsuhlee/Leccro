import React from "react";
var Radium = require('radium');

import { connect } from 'react-redux';
import { showDashboardBottomNav } from '../../actions';

@Radium
class MyStoreGrid extends React.Component {
	constructor() {
		super();
		this.onStoreHovered = this.onStoreHovered.bind(this);
		this.onStoreHoveredOut = this.onStoreHoveredOut.bind(this);
	}
	onStoreHovered(){
    	this.props.onShowBottomNav(true, this.props.imgUrl, this.props.data.name, this.props.data.category);
  	}
  	onStoreHoveredOut(){
    	this.props.onShowBottomNav(false, '', '', '');
  	}
  	componentWillMount() {
  		
  	}
	render() {
		//init grid url
		var backgroundUrl = this.props.imgUrl;
		var data = this.props.data;
		var style = {
			base:{
				margin: '13px',
				display: 'inline-block',
				width: '160px',
				height: '250px',
				textAlign: 'center',
				backgroundColor: '#F0F0F0',
				verticalAlign: 'top',
					':hover': {
				      boxShadow: 'rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px',
				      transition: 'box-shadow 0.3s ease'
				    }
			},
			image:{
				backgroundImage: 'url('+ backgroundUrl +')',
				WebKitBackgroundSize: 'cover',
				MozBackgroundSize: 'cover',
				OBackgroundSize: 'cover',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
				backgroundColor: '#fff',
				width: '150px',
				height: '150px',
				margin: '5px',
				boxShadow: '0px 0px 2px 2px rgba(238,238,238,1)'
			},
			name:{
				fontSize: '14px',
				color: '#565A5C',
				margin: '3px'
			},
			category:{
				fontSize: '10px',
				color: '#82888A',
				margin: '3px'
			}
		};
		return (
			<div
				key="grid" 	
				style={
					style.base
				}
				onMouseOver={ this.onStoreHovered }
				onMouseOut={ this.onStoreHoveredOut }
				>
				<div style={ style.image }></div>
				<p style={ style.name }>{ data.name }</p>
				<p style={ style.category }>{ data.category }</p>
			</div>
		);
	}
}

let mapDispatchToProps = (dispatch) => {
    return {
        onShowBottomNav: (show, logo, name, category) => dispatch(showDashboardBottomNav(show, logo, name, category))
    }
}
 
MyStoreGrid = connect(undefined, mapDispatchToProps)(MyStoreGrid);

export default MyStoreGrid;