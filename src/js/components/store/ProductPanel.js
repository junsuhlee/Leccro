var React = require('react');

var Radium = require('radium');

import ProductImage from "./ProductImage"
import ProductOption from "./ProductOption"
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var db = {
	icedCoffee:{
		name: "Iced Coffee",
		image: "http://recipes.saladmaster.com/sites/default/files/styles/recipe_page_shadowbox/public/iStock_000015244664Medium_Iced%20Coffee.jpg?itok=CxwupITA",
		logo: "https://pbs.twimg.com/profile_images/569976515874398208/Jq_ochda.png",
		price: 3.40,
		stock: -1,
		option: [
			['Small', 0],
			['Medium', 0.30],
			['Large', 0.70]
		],
		addon: [
			"Double Shot",
			"Triple Shot",
			"Double Ice",
			"Less Ice",
			"Whole Milk",
			"Reduced Fat Milk",
			"Sweetner"
		],
		addonMax: 3
	},
	greenTea:{
		name: "Green Tea",
		image: "http://www.wonderwardrobes.com/wp-content/uploads/2015/06/iced-green-tea.jpg",
		logo: "https://pbs.twimg.com/profile_images/569976515874398208/Jq_ochda.png",
		price: 2.40,
		stock: -1,
		option: [
			['Small', 0],
			['Medium', 0.30],
			['Large', 0.50]
		],
		addon: [
			"Iced",
			"Milk",
			"Lemon",
			"Sweetner"
		],
		addonMax: 2
	},
	mochaLatte:{
		name: "Mocha Latte",
		image: "https://silk.com/sites/default/files/recipes/medium/iced-coffee-mocha_shutterstock_172477499.gif",
		logo: "https://pbs.twimg.com/profile_images/569976515874398208/Jq_ochda.png",
		price: 3.60,
		stock: -1,
		option: [
			['Small', 0],
			['Medium', 0.70],
			['Large', 0.90]
		],
		addon: [
			"Iced",
			"Double Milk",
			"Whole Milk",
			"Reduced Fat Milk",
		],
		addonMax: 2
	},
};


class ProductPanel extends React.Component {
  constructor(props) {
    super(props);
    this.onExit = this.onExit.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
  }
  addToOrder(order) {
  	this.props.addToOrder(order);
  }
  onExit() {
  	this.props.onExit();
  }
  componentWillMount() {
  	window.scrollTo(0, 0);
  }
  render(){
  	var style = {
  		base: {
  			position: 'fixed',
  			overflow: 'auto',
  			top: '0px',
  			left: '0px',
  			height: '100%',
  			bottom: '0px',
  			width: '100%',
  			zIndex: '2',
  			backgroundColor: '#F0F0F0'
  		}
  	};
  	var keys = Object.keys(db);
  	console.log(this.props);
    return(
      <div style={ style.base }>
      	<ReactCSSTransitionGroup key="Group" transitionName="fade" 
						transitionAppear = {true} transitionAppearTimeout = {500}
						transitionLeave = {true} transitionLeaveTimeout = {500}
						transitionEnter = {true} transitionEnterTimeout = {500}>
	        <ProductImage onExit={ this.onExit } brandData={ this.props.brandData } productData={ this.props.productData } />
	        <ProductOption addToOrder={ this.addToOrder } productData={ this.props.productData } />
        </ReactCSSTransitionGroup>
      </div>
    );
  }

};


module.exports = Radium(ProductPanel);
