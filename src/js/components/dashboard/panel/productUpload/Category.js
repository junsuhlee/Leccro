import React from "react";
var Radium = require('radium');
import { Link } from "react-router";

import SelectField from 'material-ui/lib/SelectField';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { connect } from 'react-redux';
import { updateDashboardProduct } from '../../../../actions';


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
					border: 'solid 2px #ddd',
					backgroundColor: '#fff',
					width: '200px',
					fontSize: '14px',
					paddingLeft: '20px',
				}
			},
		};
var symbol;
var task;
var category;
@Radium
class Category extends React.Component {
	constructor(props) {
		super(props);
		this.updateState = this.updateState.bind(this);
		task = location.pathname.split('/')[location.pathname.split('/').length - 2];
		symbol = location.pathname.split('/')[location.pathname.split('/').length - 4];
		this.state = {
			category: "Select Category"
		};
		category = [];
		category.push(<MenuItem value="Select Category" key="0" primaryText="Select Category"/>);
		category.push(<MenuItem value="New Category" key="1" primaryText="New Category"/>);
		if(this.props.categories){
			for (var i = 0; i < this.props.categories.length; i++ ) {
			  category.push(<MenuItem value={this.props.categories[i]} key={i + 2} primaryText={`${this.props.categories[i]}`}/>);
			}	
		}
		
	}
	handleCategoryChange = (event, index, value) => {
		if(value == "New Category"){
			this.props.updateDashboardProduct('newCategory',true);	
		}
		this.setState({
			category: value
		});
		this.props.updateDashboardProduct('category',value);	
	}
	updateState(which, content, e) {
		this.props.updateDashboardProduct(which,e.target.value);	
	}
	render() {
			var input = [];
			console.log(this.state.category);
			if(this.props.newCategory){
				input.push(
					<div style={ style.inputContainer }>
						<input key="category" onChange={ this.updateState.bind(this,'category', '') } value={this.props.name} placeholder="Name" style={[
							style.inputBase
							]} />
					</div>
				);
			}
			return (
				<div key="category" style={ style.base }>
					<div style={ style.base.title }>
						Select Product Category
					</div>
					<SelectField 
					maxHeight={300} 
					underlineStyle={style.picker.underLine}
					style={style.picker.style}
					value={this.state.category} 
					onChange={this.handleCategoryChange}>
       				 {category}
      				</SelectField>
					
					<div key="next-name" style={ style.button.base }>
						<Link to={`/dashboard/${symbol}/product/${task}/category`} style={ style.button.link }></Link>
						Next
					</div>
				
				</div>
			);
	}
}
let mapStateToProps = (state) => {
    return {     
        category: state.dashboardProduct.category,
        newCategory: state.dashboardProduct.newCategory
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateDashboardProduct: (which,content) => dispatch(updateDashboardProduct(which,content)),
    }
}


Category = connect(mapStateToProps,mapDispatchToProps)(Category);

export default Category;