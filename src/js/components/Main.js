var React = require('react');

var Radium = require('radium');



import SearchBar from "./tool/SearchBar";

var style = {
	container: {
		marginTop: '54px',
		display:'flex',
	},
	left: {
		minWidth: '250px',
		position: 'fixed',
		height: 'calc(100vh - 55px)',
		backgroundColor: '#fff',
		backgroundImage: 'url("https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimgcc.naver.jp%2Fkaze%2Fmission%2FUSER%2F20151005%2F15%2F1078835%2F18%2F640x960x41303b42bd750a637f459d9d.jpg%2F300%2F600&twidth=300&theight=600&qlt=80&res_format=jpg&op=r")',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		WebKitBackgroundSize: 'cover',
		MozBackgroundSize: 'cover',
		OBackgroundSize: 'cover',
		borderRight: '1px solid #ddd',
		borderTop: 'solid 1px #ddd',
		borderBottom: 'solid 1px #ddd',
	},
	right: {
		position: 'relative',
		padding: '0 0 0 251px',
		width: 'calc(100% - 251px)',
	},
};

export default class Main extends React.Component {
	constructor() {
    	super();
    	//
 	}
	render() {
		var child = React.Children.map(this.props.children,
      	 (child) => React.cloneElement(child, {}));
		return(
			<div style={ style.container }>
				<div style={ style.left }>
				</div>
				<div style={ style.right }>
					<SearchBar />
					{ child }
				</div>
			</div>
		);
	}

};
