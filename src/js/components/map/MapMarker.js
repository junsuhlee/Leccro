import React from 'react';

var Radium = require('radium');


var K_WIDTH = 30;
var K_HEIGHT = 30;


class MapMarker extends React.Component {

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
    	hovered: false
    };
    this.toggleHover = this.toggleHover.bind(this);
  }
  toggleHover(hoverState) {
  	this.setState({
  		hovered: hoverState
  	});
  }
  componentDidMount() {
  	//init hovermap	
  	
  }
  render() {

	var style = {
	  base: {
	  position: 'absolute',
	  width: K_WIDTH,
	  height: K_HEIGHT,
	  left: -K_WIDTH / 2,
	  top: -K_HEIGHT / 2,
	  backgroundColor: '#FF5B5B',
	  boxShadow: '0px 0px 3px 1px rgba(0,0,0,1)',
	  textAlign: 'center',
	  color: '#fff',
	  lineHeight: '30px',
	  fontSize: 16,
	  fontWeight: 'bold',
	  padding: 4,
	  },
	  hover: {
	  	backgroundColor: '#9C2E2E',
	  	zIndex: '1',
	  }
	};
  	var markerStyle = [];
  	markerStyle.push(style.base);
  	if(this.state.hovered){
  		markerStyle.push(style.hover);
  	}
    return (
       <div style={ markerStyle }>
          {this.props.num}
       </div>
    );
  }
}

module.exports = Radium(MapMarker);