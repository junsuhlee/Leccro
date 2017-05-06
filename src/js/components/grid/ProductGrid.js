import React from "react";
var Radium = require('radium');


class ProductGrid extends React.Component {
	constructor(props) {
		super(props);
		this.onProduct = this.onProduct.bind(this);
	}
	onProduct() {
		this.props.onProduct(this.props.data);
	}
  	componentWillMount() {
  		
  	}
	render() {
		//init grid url
		var data = this.props.data;
		var style = {
			base:{
				margin: '10px',
				display: 'inline-block',
				width: '280px',
				height: '280px',
				backgroundColor: '#fff',
				border: '1px solid #ddd',
				cursor: 'pointer',
				textAlign: 'left',
				verticalAlign: 'top',
				":hover" :{
					textDecoration: 'underline'
				}
			},
			image:{
				backgroundImage: 'url(' + this.props.data.image + ')',
				WebKitBackgroundSize: 'cover',
				MozBackgroundSize: 'cover',
				OBackgroundSize: 'cover',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
				position: 'relative',
				width: '280px',
				height: '235px',
				boxShadow: '0px 0px 2px 2px rgba(238,238,238,1)'
			},
			name:{
				fontSize: '14px',
				color: '#565A5C',
				margin: '3px',
				paddingLeft: '5px',
				textOverflow: 'ellipsis',
				overflow: 'hidden',
				whiteSpace: 'nowrap',
				maxWidth: '260px'
			},
			category:{
				fontSize: '10px',
				color: '#82888A',
				margin: '3px',
				paddingLeft: '5px',
				textOverflow: 'ellipsis',
				overflow: 'hidden',
				whiteSpace: 'nowrap',
				maxWidth: '260px'
			},
			price:{
				position: 'absolute',
				backgroundColor: 'rgba(0,0,0,0.80)',
				fontSize: '18px',
				color: '#fff',
				padding: '5px',
				right: '0px',
				bottom: '0px'
			}
		};
		return (
			<div
				key="grid"
				onClick={ this.onProduct } 
				style={
					style.base
				}>
				<div style={ style.image }>
					<div style={ style.price }>
					${ data.price.toFixed(2) }
					</div>
				</div>
				<p style={ style.name }>{ data.name }</p>
				<p style={ style.category }>{ data.category }</p>
			</div>
		);
	}
}

module.exports = Radium(ProductGrid);