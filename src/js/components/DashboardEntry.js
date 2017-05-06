var React = require('react');

var Radium = require('radium');

import ConsoleContainer from "./dashboard-entry/ConsoleContainer"

import { connect } from 'react-redux';
import { showSignView } from '../actions';




@Radium
class DashboardEntry extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div style={{display: 'flex'}}>
        <ConsoleContainer />
      </div>
    );
  }
};

let mapStateToProps = (state) => {
    return {
        uid: state.user.userId,
        logined: state.user.logined
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        onShowSignView: () => dispatch(showSignView())
    }
}

DashboardEntry = connect(mapStateToProps, mapDispatchToProps)(DashboardEntry);

export default DashboardEntry;