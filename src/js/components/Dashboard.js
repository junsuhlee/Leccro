var React = require('react');
var Radium = require('radium');
import { Link } from "react-router"

import { connect } from 'react-redux';
import { loadingHandler } from '../actions';

var data = {
	name: "Julius Meinl",
	symbol: "julius",
	banner: "http://www.alfavito.com.ua/modules/pages/files/138442657596_1713.jpg",
	logo: "https://pbs.twimg.com/profile_images/569976515874398208/Jq_ochda.png",
	description: "Austrian Top Shelf"
};


var symbol;
var path;
var page;

@Radium
class Dashboard extends React.Component {
	constructor(props) {
	    super(props);
	    path = location.pathname;
		symbol = path.split("/")[2];
		page = path.split("/")[3];
		this.state = {
			page: page,
			data: {}
		};
		this.pageHandler = this.pageHandler.bind(this);
 	}
 	componentWillMount() {
 		this.props.loadingHandler('SHOW_LOADING', 'Setup Dashboard');
 		var ref = firebase.database().ref('/brand/' + symbol);
		ref.once('value', function(snapshot) {
		  this.props.loadingHandler('HIDE_LOADING');
		  this.setState({
		  	data: snapshot.val(),
		  	status: snapshot.val().status
		  })
	 	}.bind(this));
 	}
 	pageHandler = (page) => {
 		this.setState({
 			page: page
 		});
 	}
	render(){
		var style = {
				base:{
					marginTop: '54px',
					display: 'flex',
					position: 'relative'
				},
				menu:{
					base: {
						height: 'calc(100vh - 54px)',
						minHeight: 'calc(320px + 20vh)',
						width: 'calc(80px + 6vh)',
						background: '#E3E3E3',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
				
					},
					
					inner: {
						height: 'calc(320px + 8vh)',
					},
					selected: {
						opacity: '1.0',
					},
					unselected: {
						opacity: '0.5',
					},
					grid: {
						hide: {
							visibility: 'hidden'
						},
						base: {
							marginTop: '1.6vh',
							marginBottom: '1.6vh',
							marginLeft: '3vh',
							marginRight: '3vh',
							width: '80px',
							height: '80px',
							backgroundSize: '100% 100%'
						},
						home: {
							backgroundImage: 'url(/images/grid/dashboard/home.png)'
						},
						order: {
							backgroundImage: 'url(/images/grid/dashboard/order.png)'
						},
						inventory: {
							backgroundImage: 'url(/images/grid/dashboard/inventory.png)'
						},
						analytic: {
							backgroundImage: 'url(/images/grid/dashboard/analytic.png)'
						},
					}
				},
				content: {
					base : {
						background: '#f0f0f0',
						width: '100%',
						display: 'flex',
						minWidth: '500px',
						height: 'calc(100vh - 54px)',
						minHeight: 'calc(320px + 20vh)',
						overflowY: 'scroll',
						position: 'relative'
					}
				},
				nav: {
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
						background: 'url(' + this.state.data.logo + ') center center/cover no-repeat',
						WebKitBackgroundSize: 'cover',
						MozBackgroundSize: 'cover',
						OBackgroundSize: 'cover',
						position: 'absolute',
						top: '0px',
						left: '4px',
						width: '50px',
					    height: '50px'
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
				link:{
					textDecoration: 'none'
				}
			};
		var menus = [];

		if(this.state.status == 'new'){
			menus.push(
				<div key="menus">
				<Link onClick={this.pageHandler.bind(this,'home')} to={`/dashboard/${symbol}/home`}>
							<div key="home" style={[
								style.menu.grid.base, 
								style.menu.grid.home, 
								this.state.page == 'home' && style.menu.selected, 
								this.state.page != 'home' && style.menu.unselected
								]}></div></Link>
							<Link onClick={this.pageHandler.bind(this,'inventory')} to={`/dashboard/${symbol}/inventory`}>
							<div key="inventory" style={[
								style.menu.grid.base, 
								style.menu.grid.inventory,
								this.state.page == 'inventory' && style.menu.selected, 
								this.state.page != 'inventory' && style.menu.unselected
				]}></div></Link>
				</div>
			);
		}else{
			menus.push(
				<div key="menus">
				<Link onClick={this.pageHandler.bind(this,'home')} to={`/dashboard/${symbol}/home`}>
							<div key="home" style={[
								style.menu.grid.base, 
								style.menu.grid.home, 
								this.state.page == 'home' && style.menu.selected, 
								this.state.page != 'home' && style.menu.unselected
								]}></div></Link>
							<Link key="orderLink" onClick={this.pageHandler.bind(this,'order')} to={`/dashboard/${symbol}/order`}>
							<div key="order" style={[
								style.menu.grid.base, 
								style.menu.grid.order,
								this.state.page == 'order' && style.menu.selected, 
								this.state.page != 'order' && style.menu.unselected
								]}></div></Link>
							<Link onClick={this.pageHandler.bind(this,'inventory')} to={`/dashboard/${symbol}/inventory`}>
							<div key="inventory" style={[
								style.menu.grid.base, 
								style.menu.grid.inventory,
								this.state.page == 'inventory' && style.menu.selected, 
								this.state.page != 'inventory' && style.menu.unselected
								]}></div></Link>
							<Link key="analyticLink" onClick={this.pageHandler.bind(this,'analytic')} to={`/dashboard/${symbol}/analytic`}>
							<div key="analytic" style={[
								style.menu.grid.base, 
								style.menu.grid.analytic,
								this.state.page == 'analytic' && style.menu.selected, 
								this.state.page != 'analytic' && style.menu.unselected
								]}></div></Link>
				</div>
			);
		}

		var props ={};
		props = this.state.data;
		props.pageHandler = this.pageHandler;
		var child = React.Children.map(this.props.children,
      	 (child) => React.cloneElement(child, props));
		return(
			<div>
				<div style={ style.nav.base }>
					<div style={ style.nav.logo }></div>
					<Link to={`/dashboard`}><div style={ style.nav.closeButton }></div></Link>
				</div>
				<div style={ style.base }>
					<div style={ style.menu.base }>
						<div style={ style.menu.inner }>
							{menus}
						</div>
					</div>
					<div style={ style.content.base }>
						{child}
					</div>
				</div>
				
			</div>
		);
	}

};

let mapDispatchToProps = (dispatch) => {
    return {
        loadingHandler: (type,content) => dispatch(loadingHandler(type,content)),
    }
}


Dashboard = connect(undefined,mapDispatchToProps)(Dashboard);


export default Dashboard;