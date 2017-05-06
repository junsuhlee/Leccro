import React from "react";
var Radium = require('radium');
import StoreGrid from '../grid/StoreGrid';
import { Link } from "react-router";

var style = {
			base: {
				// verticalAlign: 'top',
				marginTop: '70px',
				width: '100%',
				display: 'flex',
				overflowY: 'auto'
			},
			inner: {
				margin: 'auto',
				width: '100%'
			}
		};

var key;	
class SearchPanel extends React.Component {
	constructor(props) {
		super(props);
		//parsing location
		this.state = {
			brandList: []
		};
		this.updateSearch = this.updateSearch.bind(this);
	    
	    this.searchAll = this.searchAll.bind(this);
	    this.searchOne = this.searchOne.bind(this);
	}
	componentWillMount(){
		this.updateSearch();
	}
	componentWillReceiveProps(nextProps) {
		this.updateSearch();
	}
	searchAll(){
		var ref = firebase.database().ref('/brand/');
	      ref.on('child_added', function(snapshot) {
	        if(snapshot.val() && snapshot.val().status == 'open'){
	          this.state.brandList.push(
					  	<Link key={snapshot.key} to={`/${snapshot.key}`}><StoreGrid data={snapshot.val()} /></Link>
				  );
			  	this.setState({});
	        }
	    }.bind(this));
	}
	searchOne(key){
		var ref = firebase.database().ref('/brand/' + key);
	      ref.on('value', function(snapshot) {
	        if(snapshot.val() && snapshot.val().status == 'open'){
	          this.state.brandList.push(
					  	<Link key={snapshot.key} to={`/${snapshot.key}`}><StoreGrid data={snapshot.val()} /></Link>
				  );
			  	this.setState({});
	        }
	    }.bind(this));
	}
	updateSearch(){
		var currentLocation = location.pathname;
	    var loc = currentLocation.split("/");
	    key = loc[loc.length - 1].toLowerCase();
	    this.state.brandList = [];
	    if(key.toLowerCase() == 'all'){
	    	this.searchAll();
	    }else{
	    	this.searchOne(key.toLowerCase());
	    }

	    
	}
	
	render() {
		return (
			<div 
				style={
					style.base
				}>
				<div style={ style.inner }>
					{this.state.brandList}
				</div>
				
			</div>
		);

	

	}

}

module.exports = Radium(SearchPanel);