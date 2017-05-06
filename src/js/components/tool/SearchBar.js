var React = require('react');

var Radium = require('radium');
import { Link, browserHistory } from "react-router";

var style = {
			main: {
				searchBarContainer: {
					width: '100%',
					transition: 'all 0.3s linear',
					height: '70px',
					position: 'fixed',
					zIndex: '1',
					borderTop: 'solid 1px #ddd',
					borderBottom: 'solid 1px #ddd',
				},
				searchBar: {
					fontSize: '16px',
					lineHeight: '70px',
					width:'calc(100% - 49px)',
					border: 'none',
		  			outline: 'none',
		  			verticalAlign: 'top',
				},
				searchButton: {
					backgroundColor: '#fff',
					position: 'relative',
					color: '#fff',
					border: 'none',
					verticalAlign: 'top',
					outline: 'none',
					paddingLeft: '12px',
					paddingRight: '12px',
					fontSize: '14px',
					height: '70px',
					lineHeight: '70px'
				}
			},
			search: {
				container: {
					height: '120px',
					width: '100%',
				},
				searchBarContainer: {
					width: '95%',
					maxWidth: '500px',
					left: '50%',
					transform: 'translate(-50%)',
					transition: 'all 0.3s linear',
					boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
					},
				searchBar: {
					fontSize: '24px',
					lineHeight: '41px',
					width:'calc(100% - 53px)',
					border: 'solid 2px #fff',
		  			outline: 'none',
				},
				searchButton: {
					backgroundColor: '#fff',
					position: 'relative',
					color: '#fff',
					border: 'none',
					verticalAlign: 'top',
					outline: 'none',
					paddingLeft: '12px',
					paddingRight: '12px',
					fontSize: '14px',
					height: '45px',
					lineHeight: '35px'
				}
			},
			
		};

@Radium
class SearchBar extends React.Component {
  constructor() {
     super();
     this.handleSearchChange = this.handleSearchChange.bind(this); 
     this.onSearch = this.onSearch.bind(this);
     this.state = {

     };
     var loc = location.pathname.split("/");
     if(loc.length > 2){
     	this.state.searchValue = location.pathname.split("/")[loc.length - 1];
     }
  }
  handleSearchChange(e) {
	this.setState({
		searchValue: e.target.value
	});
  }
  onSearch() {
	if(this.state.searchValue != "" && this.state.searchValue.charAt(0) == "@"){
		browserHistory.push('/' + this.state.searchValue.substring(1, this.state.searchValue.length));
	}else if(this.state.searchValue != ""){
		browserHistory.push('/s/' + this.state.searchValue);
	}
  }
  render(){
  	var containerPosition;
 	var searchButtonStyle;
  	var searchBarStyle;
  	switch(this.props.location){
			default:
				containerPosition = style.main.searchBarContainer;
				searchButtonStyle = style.main.searchButton;
				searchBarStyle = style.main.searchBar;
			break;
	}
    return( 
      <div key="searchBarContainer" style={ containerPosition }>
			<button style={ searchButtonStyle } onClick={ this.onSearch }>
				<img class="icon icons8-Search-Filled" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '25px'}} src="https://maxcdn.icons8.com/iOS7/PNG/32/Very_Basic/search_filled-32.png"/>
			</button>
			<input placeholder="Search for a brand" value={this.state.searchValue} onChange={this.handleSearchChange} style={ searchBarStyle } />
	  </div>
    );
  }

};
export default SearchBar;
