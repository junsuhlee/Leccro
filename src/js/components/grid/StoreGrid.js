import React from "react";
var Radium = require('radium');


class StoreGrid extends React.Component {
	constructor() {
		super();
		this.onHover = this.onHover.bind(this);
		this.outHover = this.outHover.bind(this);
	}
	onHover(){
		this.setState({
			hover: true
		});
	}
	outHover(){
		this.setState({
			hover: false
		});
	}
  	componentWillMount() {
  		
  	}
	render() {
		//init grid url
		var style = {
			dummy:{
				marginTop: '100%'
			},
			base:{
				display: 'inline-block',
				width: 'calc(33.3333% - 2px)',
				textAlign: 'center',
				backgroundColor: '#fff',
				border: '1px solid #ddd',
				verticalAlign: 'top',
				position: 'relative',
				'@media (max-width: 1014px)': {
						width: 'calc(50% - 2px)',
				}
			},
			banner:{
				backgroundImage: 'url('+ this.props.data.banner +')',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				WebKitBackgroundSize: 'cover',
				MozBackgroundSize: 'cover',
				OBackgroundSize: 'cover',
				position: 'absolute',
				width: '100%',
				height: '100%',
				bottom: '0px',
			},
			logoContainer:{
				width: '100%',
				position: 'absolute',
				height: '75%',
				top: '0px',
				backgroundColor: 'rgba(0,0,0,0.3)'
			},
			logo:{
				backgroundImage: 'url('+ this.props.data.logo +')',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				WebKitBackgroundSize: 'cover',
				MozBackgroundSize: 'cover',
				OBackgroundSize: 'cover',
				position: 'absolute',
				backgroundColor: '#fff',
				width: '150px',
				height: '150px',
				top: '0px',
				bottom: '0px',
				marginTop: 'auto',
				marginBottom: 'auto',
				left: '0px',
				right: '0px',
				marginLeft: 'auto',
				marginRight: 'auto'
			},
			nameHolder: {
				position: 'absolute',
				bottom: '0px',
				left: '0px',
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				height: '25%',
				backgroundColor: 'rgba(255,255,255,1)'
			},
			name:{
				fontSize: '18px',
				color: '#565A5C',
				margin: '3px',
				textOverflow: 'ellipsis',
				overflow: 'hidden',
				whiteSpace: 'nowrap',
			},
			category:{
				fontSize: '10px',
				color: '#82888A',
				margin: '3px',
				textOverflow: 'ellipsis',
				overflow: 'hidden',
				whiteSpace: 'nowrap',
			}
		};
		var hovered = {};
		if(this.state.hover){
			hovered.logo = {
				width: '190px',
				height: '190px',
				transition: 'all 0.1s linear'
			};
			hovered.banner = {
				backgroundColor: 'rgba(0,0,0,0.7)',
				transition: 'all 0.1s ease'
			};
		}
		return (
			<div
				key="grid"
				onMouseOver={ this.onHover }
				onMouseOut={ this.outHover } 	
				style={
					style.base
				}>
				<div style={ style.dummy }></div>
				<div style={ style.banner }>
					<div key="banner" style={[ style.logoContainer , hovered.banner ]}>
						<div key="logo" style={[ style.logo, hovered.logo ]}></div>
					</div>
					<div style={ style.nameHolder }>
						<p style={ style.name }>{ this.props.data.name }</p>
						<p style={ style.category }>{ this.props.data.category }</p>
					</div>
				</div>

			</div>
		);
	}
}

module.exports = Radium(StoreGrid);