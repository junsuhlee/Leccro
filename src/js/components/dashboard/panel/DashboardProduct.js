import React from "react";
var Radium = require('radium');
import { Link } from "react-router";




import { connect } from 'react-redux';
import { updateDashboardProduct } from '../../../actions';

import Type from './productUpload/Type';
import Name from './productUpload/Name';
import Category from './productUpload/Category';

var style = {
			base: {
				display:'table',
				minHeight: 'calc(100vh - 180px)',
				width: '50%',
				textAlign: 'center',
				color: '#333',
				paddingTop: '70px',
				paddingBottom: '70px',
				backgroundColor: '#fff',
				title:{
					textAlign: 'center',
					paddingTop: '15px',
					paddingBottom: '15px',
					fontSize: '28px',
					fontWeight: '800',
					color: '#333'
				}
			},
			button:{
				container: {

				},
				base: {
					fontSize: '34px',
					textAlign: 'center',
					position: 'relative',
					padding: '10px',
					marginLeft: 'auto',
					marginRight: 'auto',
					width: '150px',
					cursor: 'pointer',
					':hover':{
						backgroundColor: '#ddd',
						transition: 'all 0.2s ease'
					}
				},
				link:{
					textDecoration: 'none',
					color: '#333',
					position: 'absolute',
					top: '0',
					bottom: '0',
					left: '0',
					width: '100%',
				}
			},
			type: {
				text:{
					width: '50%',
					textAlign: 'center',
					margin: 'auto',
					paddingTop: '15px',
					paddingBottom: '15px'
				},
				grid:{
					container:{
						textAlign: 'center'
					},
					base:{
						textAlign: 'center',
						display: 'inline-block',
						cursor: 'pointer',
						padding: '10px',
						font: {
							fontWeight: '700',
							color: '#777'
						},
						selected: {
							backgroundColor: '#ddd'
						}
					},
					basic:{
						width: '150px',
						height: '93px',
						backgroundImage: 'url(/images/icons/dashboard/product-basic.png)',
						backgroundSize: '100% 100%'
					}
				}
			},
			inputContainer:{
				paddingTop: '30px',
				paddingBottom: '30px',
				width: '70%',
				maxWidth: '400px',
				verticalAlign: 'top',
				textAlign: 'center',
				margin:'auto'
			},
			inputBase:{
				fontSize: '18px',
				lineHeight: '44px',
				border: 'solid 2px #ddd',
				width: 'calc(100% - 15px)',
				textAlign: 'center',
				outline: 'none',
				paddingLeft: '5px',
				paddingRight: '5px',
				transition: 'border 0.3s',
				verticalAlign: 'top',
				':focus': {
				     border: 'solid 2px #000'
				}
			},
			picker: {
				underLine: {
					display: 'none'
				},
				style: {
					backgroundColor: '#fff',
					width: '60px',
					fontSize: '24px',
					paddingLeft: '20px',
				}
			},
		};
var page;
var task;
var symbol;
@Radium
class DashboardProduct extends React.Component {
	constructor(props) {
		super(props);
		this.updateState = this.updateState.bind(this);
		task = location.pathname.split('/')[location.pathname.split('/').length - 2];
		symbol = location.pathname.split('/')[location.pathname.split('/').length - 4];
	}
	updateState(which, content, e) {
		if(e.target.value){
			this.props.updateDashboardProduct(which,e.target.value);
		}else{
			this.props.updateDashboardProduct(which,content);
		}
		
	}
	render() {
		console.log(this.props);
		page = location.pathname.split('/')[location.pathname.split('/').length - 1];
		switch(page){
			case 'type':
			return (
				<Type />
			);
			case 'name':
			return (
				<Name />
			);
			case 'category':
			return (
				<Category />
			);
		}
		
	}
}
let mapStateToProps = (state) => {
    return {
        type: state.dashboardProduct.type,
        name: state.dashboardProduct.name,
	    category: state.dashboardProduct.category,
	    price: state.dashboardProduct.price,
	    option: state.dashboardProduct.option,
	    addon: state.dashboardProduct.addon,
	    image: state.dashboardProduct.image
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateDashboardProduct: (which,content) => dispatch(updateDashboardProduct(which,content)),
    }
}


DashboardProduct = connect(mapStateToProps,mapDispatchToProps)(DashboardProduct);

export default DashboardProduct;