var React = require('react');

var Radium = require('radium');
import { Link } from "react-router"
import { connect } from 'react-redux';
import { showMainDropDown, hideMainDropDown, tryLogin } from '../../../actions';

var style = {
	base: {
		top: '54px',
		right: '0px',
		width: '250px',
		backgroundColor: '#E3E3E3',
    position: 'absolute',
	},
	hide: {
		visibility: 'hidden'
	},
	cell: {
		fontSize: '12px',
		padding: '7px',
    lineHeight: '40px',
    textAlign: 'center',
		':hover': {
			backgroundColor: '#CDCDCD'
		}
	},
  link: {
    textDecoration: 'none',
    color: '#000'
  }
};

@Radium
class MainDropDown extends React.Component {
  constructor() {
    super();
    this.onSignout = this.onSignout.bind(this);
  }
  onSignout() {
  	firebase.auth().signOut().then(function() {
	  tryLogin(false, '');
	}, function(error) {
	 
	});
  }
  render(){
    return(
      <div 
      	onMouseOver={ this.props.onShowMainDropDown }
      	onMouseOut={ this.props.onHideMainDropDown }
      	style={[ style.base, !this.props.show && style.hide] }>
        <div style={ style.link } key="order" style={ style.cell }>Order</div>
        <Link style={ style.link } key="dashboaradLink" to={`/dashboard`}><div key="dashboard" style={ style.cell }>Dashboard</div></Link>
        <Link style={ style.link } key="launchLink" to={`/launch`}><div key="launch" style={ style.cell }>Launch New Brand</div></Link>
        <div key="signout" onClick={ this.onSignout } style={ style.cell }>Sign Out {this.props.email}</div>
      </div>
    );
  }
};

let mapStateToProps = (state) => {
    return {
        show: state.mainDropDown.show,
        email: state.user.userEmail
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        onShowMainDropDown: () => dispatch(showMainDropDown()),
        onHideMainDropDown: () => dispatch(hideMainDropDown()),
        tryLogin: (success,email) => dispatch(tryLogin(success,email)),
    }
}


MainDropDown = connect(mapStateToProps,mapDispatchToProps)(MainDropDown);


export default MainDropDown;