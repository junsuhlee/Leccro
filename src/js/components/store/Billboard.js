var React = require('react');

var Radium = require('radium');

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class Billboard extends React.Component {
  constructor(props) {
    super(props);
    this.onExit = this.onExit.bind(this);
  }
  onExit() {
  }

  render(){
  	var style = {
  		
  		base: {
			textAlign: 'center',
			display:'flex',
			height: 'calc(100vh - 54px)',
			background: 'url(' + this.props.data.billboard[0].image +') center center/cover no-repeat',
			WebKitBackgroundSize: 'cover',
			MozBackgroundSize: 'cover',
			OBackgroundSize: 'cover',
  		}
  	};

    return(
      <div style={ style.base }>
      </div>
    );
  }

};


module.exports = Radium(Billboard);
