import React from "react";
var Radium = require('radium');
import ProductGrid from '../grid/ProductGrid';

import Selector from './Selector';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var style = {
			base: {
				backgroundColor: '#f0f0f0',
				textAlign: 'center',
				position: 'relative',
				display: 'flex',
				minWidth:'100%',
				minHeight: '100vh',
				flexDirection: 'column',
				'@media (max-width: 505px)': {
					marginTop: '0px',
					minWidth: '100%',
				}
			},
			inner: {
				width: '100%',
				maxWidth: '1500px'
			},
		};

var categories;
var limit;
class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.onProduct = this.onProduct.bind(this);
		this.onCategoryChange = this.onCategoryChange.bind(this);
		this.state = {
			category: 'All',
			productList: []
		};
	}
	onProduct(data){
		this.props.onProduct(data);
	}
	componentWillMount(){
		this.categoryQuery('All',20);
	}
	categoryQuery(category, limit){
		this.state.productList = [];
		if(category == 'All'){
			var ref = firebase.database().ref('/product/' + location.pathname.split("/")[1].toLowerCase()).limitToLast(limit);
			ref.on('child_added', function(snapshot) {
			  if(snapshot.val() && snapshot.val().status == 'onSale'){
			  	this.state.productList.push(
			  		<ReactCSSTransitionGroup key={snapshot.key} transitionName="fade" 
						transitionAppear = {true} transitionAppearTimeout = {300}
						transitionLeave = {true} transitionLeaveTimeout = {300}
						transitionEnter = {true} transitionEnterTimeout = {300}>
					  	<ProductGrid key={snapshot.val().name} onProduct={ this.onProduct } 
							data={ snapshot.val() } />
					</ ReactCSSTransitionGroup>
				  );
			  	this.setState({});
			  }
		 	}.bind(this));
		}else{
			var ref = firebase.database().ref('/product/' + location.pathname.split("/")[1].toLowerCase()).orderByChild('category').equalTo(category).limitToLast(limit);
			ref.on('child_added', function(snapshot) {
			  if(snapshot.val() && snapshot.val().status == 'onSale'){
			  	this.state.productList.push(
			  		<ReactCSSTransitionGroup key={snapshot.key} transitionName="fade" 
						transitionAppear = {true} transitionAppearTimeout = {300}
						transitionLeave = {true} transitionLeaveTimeout = {300}
						transitionEnter = {true} transitionEnterTimeout = {300}>
					  	<ProductGrid key={snapshot.val().name} onProduct={ this.onProduct } 
							data={ snapshot.val() } />
					</ ReactCSSTransitionGroup>
				  );
			  	this.setState({});
			  }
		 	}.bind(this));
		}
	}
	onCategoryChange(category){
		this.setState({
			category: category
		});
		this.categoryQuery(category, 20);
	}
	render() {
		categories = ['All'];
		if(this.props.data.categories){
			for(var i = 0; i < this.props.data.categories.length ; i++){
				categories.push(this.props.data.categories[i]);
			}
		}
		return (
			<div style={ style.base }>
				{categories.length > 0 && <Selector optionChange={this.onCategoryChange} options={ categories } />}
				<div style={ style.inner }>
					{ this.state.productList }
				</div>
				
			</div>
		);

	

	}

}

module.exports = Radium(ProductList);