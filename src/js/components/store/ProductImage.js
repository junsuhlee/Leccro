import React from "react";
var Radium = require('radium');


class ProductImage extends React.Component {
	constructor(props) {
		super(props);
		this.onExit = this.onExit.bind(this);
	}
	onExit() {
		this.props.onExit();
	}
	render() {
		var style = {
			imageHolder:{
				base: {
					marginTop: '54px',
					textAlign: 'center',
					position: 'relative',
					width: '100%',
					height: '300px',
					background: 'url(' + this.props.productData.image + ') center center/cover no-repeat',
					WebKitBackgroundSize: 'cover',
					MozBackgroundSize: 'cover',
					OBackgroundSize: 'cover',
				}
			},
			nav:{
				base:{
					position: 'fixed',
					top: '0px',
					width: '100%',
					left: '0px',
					height: '54px',
					zIndex: '3',
					background: '#fafafa'
				},
				logo:{
					background: 'url(' + this.props.brandData.logo + ') center center/cover no-repeat',
					WebKitBackgroundSize: 'cover',
					MozBackgroundSize: 'cover',
					OBackgroundSize: 'cover',
					position: 'absolute',
					top: '0px',
					left: '4px',
					width: '50px',
					height: '50px',
					border: '1px solid #ddd'
				},
				name:{
					position: 'absolute',
					left: '50px',
					bottom: '2px',
					textOverflow: 'ellipsis',
					overflow: 'hidden',
					whiteSpace: 'nowrap',
					maxWidth: '300px',
					paddingLeft: '8px',
					color: '#333',
					fontSize: '22px',
				},
				closeButton:{
					position: 'absolute',
					top: '0px',
					right: '4px',
					width: '50px',
					height: '50px',
					background: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgc3R5bGU9Im51bGwiIGZpbGw9IiNmZmZmZmYiID4gICAgPHBhdGggc3R5bGU9InRleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDtsaW5lLWhlaWdodDpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTtibG9jay1wcm9ncmVzc2lvbjp0YjstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOkJpdHN0cmVhbSBWZXJhIFNhbnMiIGQ9Ik0gNy43MTg3NSA2LjI4MTI1IEwgNi4yODEyNSA3LjcxODc1IEwgMjMuNTYyNSAyNSBMIDYuMjgxMjUgNDIuMjgxMjUgTCA3LjcxODc1IDQzLjcxODc1IEwgMjUgMjYuNDM3NSBMIDQyLjI4MTI1IDQzLjcxODc1IEwgNDMuNzE4NzUgNDIuMjgxMjUgTCAyNi40Mzc1IDI1IEwgNDMuNzE4NzUgNy43MTg3NSBMIDQyLjI4MTI1IDYuMjgxMjUgTCAyNSAyMy41NjI1IEwgNy43MTg3NSA2LjI4MTI1IHoiIGNvbG9yPSIjMDAwIiBvdmVyZmxvdz0idmlzaWJsZSIgZW5hYmxlLWJhY2tncm91bmQ9ImFjY3VtdWxhdGUiIGZvbnQtZmFtaWx5PSJCaXRzdHJlYW0gVmVyYSBTYW5zIj48L3BhdGg+PC9zdmc+) 50% 50% no-repeat #FF8D8D',
					':hover': {
						background: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgc3R5bGU9Im51bGwiIGZpbGw9IiNmZmZmZmYiID4gICAgPHBhdGggc3R5bGU9InRleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDtsaW5lLWhlaWdodDpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTtibG9jay1wcm9ncmVzc2lvbjp0YjstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOkJpdHN0cmVhbSBWZXJhIFNhbnMiIGQ9Ik0gNy43MTg3NSA2LjI4MTI1IEwgNi4yODEyNSA3LjcxODc1IEwgMjMuNTYyNSAyNSBMIDYuMjgxMjUgNDIuMjgxMjUgTCA3LjcxODc1IDQzLjcxODc1IEwgMjUgMjYuNDM3NSBMIDQyLjI4MTI1IDQzLjcxODc1IEwgNDMuNzE4NzUgNDIuMjgxMjUgTCAyNi40Mzc1IDI1IEwgNDMuNzE4NzUgNy43MTg3NSBMIDQyLjI4MTI1IDYuMjgxMjUgTCAyNSAyMy41NjI1IEwgNy43MTg3NSA2LjI4MTI1IHoiIGNvbG9yPSIjMDAwIiBvdmVyZmxvdz0idmlzaWJsZSIgZW5hYmxlLWJhY2tncm91bmQ9ImFjY3VtdWxhdGUiIGZvbnQtZmFtaWx5PSJCaXRzdHJlYW0gVmVyYSBTYW5zIj48L3BhdGg+PC9zdmc+) 50% 50% no-repeat #DE5050',
					}
				},	
			},
			priceTag:{
				backgroundColor: '#D4D4D4',
				left: '0px',
				bottom: '0px',
				position: 'absolute',
				fontSize: '35px',
				paddingLeft: '10px',
				paddingRight: '15px',
				lineHeight: '60px',
				fontWeight: '600'
			},
			nameHolder:{
				base:{
					width: '100%',
					textAlign: 'center',
					backgroundColor: '#fff'
				},
				name:{
					fontWeight: '600',
					fontSize: '24px',
					color: 'rgba(0,0,0,0.68)',
					paddingTop: '15px',
					paddingBottom: '15px'
				}
			}
			
		};
		
		return (
			<div>
				<div style={ style.nav.base }>
					<div style={ style.nav.logo }>
						<div style={ style.nav.name }>{ this.props.brandData.name }</div>
					</div>
					<a onClick={ this.onExit }><div style={ style.nav.closeButton }></div></a>
				</div>
				<div style={ style.imageHolder.base }>
					<div style={ style.priceTag }>
						${ this.props.productData.price.toFixed(2) }
					</div>
				</div>
				<div style={ style.nameHolder.base }>
					<p style={ style.nameHolder.name }>{ this.props.productData.name }</p>
				</div>
			</div>
		);
	}
}

module.exports = Radium(ProductImage);