import React from "react";
var Radium = require('radium');
import MyStoreGrid from '../grid/MyStoreGrid';
import { Link } from "react-router";

import { connect } from 'react-redux';
import BottomNav from './BottomNav';
import DashboardLanding from './DashboardLanding';

var style = {
			base: {
				// verticalAlign: 'top',
				marginTop: '54px',
				width: '100%',
				textAlign: 'center',
				height: 'calc(100vh - 54px)',
				overflow: 'auto',
				backgroundColor: '#E0E0E0',
			}
		};
var fakeData = {
			"Blue Bottle":{
				name: "Blue Bottle",
				category: "Coffee",
				logo: "http://static1.squarespace.com/static/560b660be4b048ed71e2a370/560c9fdae4b0041ccfeafd01/560ca006e4b05c07fc327ae8/1443667975919/logo-01.jpg?format=1000w"
			},
			"Starbucks":{
				name: "Starbucks",
				category: "Coffee",
				logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg"
			},
			"Julius Meinl":{
				name: "Julius Meinl",
				category: "Coffee",
				logo: "https://pbs.twimg.com/profile_images/569976515874398208/Jq_ochda.png"
			},
			"newStore": {

			},
		};

// <Link to="dashboard/bluebottle/home"><MyStoreGrid imgUrl="http://static1.squarespace.com/static/560b660be4b048ed71e2a370/560c9fdae4b0041ccfeafd01/560ca006e4b05c07fc327ae8/1443667975919/logo-01.jpg?format=1000w" data={ fakeData["Blue Bottle"] } /></Link>
// 					<Link to="dashboard/starbucks/home"><MyStoreGrid imgUrl="https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg" data={ fakeData["Starbucks"] } /></Link>
// 					<Link to="dashboard/julius/home"><MyStoreGrid imgUrl="https://pbs.twimg.com/profile_images/569976515874398208/Jq_ochda.png" data={ fakeData["Julius Meinl"] } /></Link>
var content = [];
var loaded;
@Radium
class ConsoleContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			brandList: undefined,
			noBrand: false
		};
		this.loadMyBrand = this.loadMyBrand.bind(this);
	}
	loadMyBrand(uid) {
		var ref = firebase.database().ref('/brand/').orderByChild('ownBy');
		ref.equalTo(uid).once('value', function(snapshot) {
		  loaded = true;
		  if(snapshot.val()){
		  	this.setState({
		  		brandList: snapshot.val()
		 	 });
		  }else{
		  	this.setState({
		  		noBrand: true
		 	 });
		  }
	 	}.bind(this));
	}
	componentWillMount() {
	  if(this.props.uid && this.props.uid != ''){
	  	loaded = false;
	  	this.loadMyBrand(this.props.uid);
	  }
	}
	componentWillReceiveProps(newProps) {
	  if(!this.props.uid && newProps.uid){
	  	loaded = false;
	  	this.loadMyBrand(newProps.uid);
	  }
	}
	render() {
		var content = [];
		for(var obj in this.state.brandList){
			content.push(
				<Link key={this.state.brandList[obj].name} to={`/dashboard/${this.state.brandList[obj].symbol}/home`}><MyStoreGrid imgUrl={this.state.brandList[obj].logo} data={ this.state.brandList[obj] } /></Link>
			);
		}

		if(this.state.noBrand && loaded){
			content.push(
				<DashboardLanding key="landing" />
			);
		}
		return (
			<div style={ style.base }>
					{content}
					<BottomNav />
			</div>
		);

	

	}

}

let mapStateToProps = (state) => {
    return {
        uid: state.user.userId
    };
}

ConsoleContainer = connect(mapStateToProps)(ConsoleContainer);


export default ConsoleContainer;