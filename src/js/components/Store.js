var React = require('react');

var Radium = require('radium');

import Banner from "./store/Banner"
import ProductList from "./store/ProductList"
import ProductPanel from "./store/ProductPanel"
import Billboard from "./store/Billboard"
import { Link } from "react-router"

var data;
var symbol;
var numItems;
var ProceedToOrder = Radium(class ProceedToOrder extends React.Component {


  render(){
    var style = {
      base:{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        zIndex: '1',
        backgroundColor: '#FF8D8D',
        padding: '20px',
        fontSize: '28px',
        color: '#fff',
        fontWeight: '600',
        ':hover':{
          backgroundColor: '#DE5050',
          transition: 'background-color 0.1s ease'
        },
        link:{
          textDecoration: 'none',
          color: 'white'
         }

      }
    };
    return(
        <div> 
        <Link style={style.link} to={`/${symbol}/checkout`}>
          <div style={ style.base }>
            ({this.props.num}) Proceed To Order
          </div>
        </Link>
        </div>
    );
  }

});




class Store extends React.Component {
  constructor() {
    super();
    this.state = {
    	showProduct : false,
      showProceedToOrder: false,
      brandData: {}
    };
    this.onProduct = this.onProduct.bind(this);
    this.onExit = this.onExit.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.checkItemExist = this.checkItemExist.bind(this);

    //parsing location
    var currentLocation = location.pathname;
    var loc = currentLocation.split("/");
    symbol = loc[1].toLowerCase();

    
  }
  checkItemExist(){
    var items = sessionStorage.getItem(symbol);
    if(items){
      items = JSON.parse(items);
      numItems = items.length;
      this.setState({
        showProceedToOrder : true,
      });
    }
  }
  addToOrder(order){  
    var items = sessionStorage.getItem(symbol);
    if(items){
      items = JSON.parse(items);
      items.push(order);
    }else{
      items = [
      ];
      items.push(order);
    }
    numItems = items.length;
    sessionStorage.setItem(symbol,JSON.stringify(items));
    this.checkItemExist();
    this.setState({
      showProduct : false
    });


  }
  onProduct(data) {
  	this.setState({
  		showProduct : true,
      showProceedToOrder: false,
      productData: data
  	});
  }
  onExit() {
    this.checkItemExist();
  	this.setState({
  		showProduct : false
  	});
  }
  componentDidMount(){
    this.checkItemExist();
  }
  componentWillMount(){
    var ref = firebase.database().ref('/brand/' + symbol);
      ref.on('value', function(snapshot) {
        if(snapshot.val() && snapshot.val().status == 'open'){
          this.setState({
            brandData: snapshot.val()
          });
        }
    }.bind(this));
  }
  render(){
  	var style = {
      base:{
        display:'flex',
        minHeight: '100vh',
        '@media (max-width: 505px)': {
          display: 'inline'
        }
      },
  		productListBase: {
  			display: 'flex',
        marginTop: '54px',
        flexDirection: 'column',
        minWidth: 'calc(100% - 251px)',
        '@media (max-width: 505px)': {
          minWidth: '100%',
        }
  		},
  		hidden:{
  			display: 'none'
  		}
  	};
  	
    return( 
      <div style={style.base}>
        { this.state.showProceedToOrder ? <ProceedToOrder num={ numItems } /> : null }
      	{ this.state.showProduct ? <ProductPanel brandData={ this.state.brandData } productData={ this.state.productData } addToOrder={ this.addToOrder } onExit={ this.onExit }/> : null }
        <Banner data={ this.state.brandData } style={ this.state.showProduct ? style.hidden : null} />
        <div style={ this.state.showProduct ? style.hidden : style.productListBase}>
          { this.state.brandData.billboard ? <Billboard data={ this.state.brandData } /> : null}
          <ProductList data={ this.state.brandData } onProduct={ this.onProduct } />
        </div>
      </div>
    );
  }

};
module.exports = Radium(Store);
