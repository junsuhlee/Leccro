var React = require('react');

var Radium = require('radium');

import MainDropDown from './MainDropDown'


var style = {
	base: {
		height: '54px',
		paddingLeft: '15px',
    fontSize: '14px',
		paddingRight: '15px',
		fontWeight: '500',
    position: 'relative',
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer',
    color: '#333',
    float: 'right',
    lineHeight: '54px'
	},
	hovered: {
		backgroundColor: '#E3E3E3',
		transition: 'all 0.2s ease'
	}

};

@Radium
class NavBarLink extends React.Component {
  constructor() {
    super();
    this.state = {
    	hovered: false
    };
    this.onHover = this.onHover.bind(this);
    this.outHover = this.outHover.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }
  onHover() {
    this.setState({
    	hovered: true
    });
  }
  outHover() {
  	this.setState({
    	hovered: false
    });
  }
  onMouseOver() {
    this.onHover();
    if(this.props.onMouseOverHandler){
      this.props.onMouseOverHandler();
    }
  }
  onMouseOut() {
    this.outHover();
    if(this.props.onMouseOutHandler){
      this.props.onMouseOutHandler();
    }
  }
  render(){
  	var content = [];
  	if(this.props.img){
  		content.push(
  			<img key="img" src={this.props.img} />
  		);
  	}
    if(this.props.dropdown){
      content.push(
        <MainDropDown key="dropdown" />
      );
    }
    return(
      <div>
        <div key="link" onClick={this.props.onClickHandler} onMouseOver={ this.onMouseOver } onMouseOut={ this.onMouseOut } style={[ style.base, this.state.hovered && style.hovered ]}>
			{ this.props.name && this.props.name }
			{ content }
		</div>
      </div>
    );
  }
};



export default NavBarLink;