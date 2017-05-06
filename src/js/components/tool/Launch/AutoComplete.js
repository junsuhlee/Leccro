var React = require('react');

var Radium = require('radium');

import { connect } from 'react-redux';
import { updateLaunch } from '../../../actions';


var style = {
  base: {
    position: 'relative'
  },
  inputbase: {
    fontSize: '18px',
    lineHeight: '44px',
    border: 'solid 2px #fff',
    width: '100%',
    textAlign: 'center',
    outline: 'none',
    transition: 'border 0.3s',
    verticalAlign: 'top',
    backgroundColor: '#fff',
    ':focus': {
         border: '2px solid #ddd',
    }
  },
  dropdown: {
    width: '100%',
    position: 'absolute',
    maxHeight: '300px',
    overflow: 'auto',
    backgroundColor: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px'
    
  },
  cell: {
    base:{
      width: '100%',
      padding: '2px',
      lineHeight: '50px',
      textAlign: 'left',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: '#F0F0F0'
      }
    },
    image:{
      width: '50px',
      height: '50px',
      display: 'inline-block',
      verticalAlign: 'top',
    },
    text: {
      paddingLeft: '4px',
      width: 'calc(100% - 54px)',
      height: '50px',
      verticalAlign: 'top',
      display: 'inline-block'
    }
    
  }

};



@Radium
class AutoComplete extends React.Component {
  constructor() {
    super();
    this.state = {
      result: []
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onCellClicked = this.onCellClicked.bind(this);
  }
  onInputChange(e) {
    this.props.updateLaunch('UPDATE_CATEGORY', e.target.value);
   
    if(e.target.value == ''){
      this.setState({
        result: []
      });
      return 0;
    }
    firebase.database().ref('/tool/category/').orderByKey().startAt(e.target.value.toLowerCase()).endAt(e.target.value.toLowerCase() + '\uf8ff').limitToLast(10).once('value').then(function(snapshot) {
      if(this.props.category)
      var result = [];
      for(var key in snapshot.val()){
        if(!key.startsWith(this.props.category)){
          return 0;
        }else{
          result.push(snapshot.val()[key]);
        }
        
      }
      this.setState({
        result: result
      });
    }.bind(this));
  }
  onCellClicked(i) {
    this.props.updateLaunch('UPDATE_CATEGORY', this.state.result[i].name);
    this.setState({
      result: []
    });
  }
  render(){
    var content = [];
    for(var i = 0; i < this.state.result.length; i++){
      var image = {
        backgroundImage: 'url(' + this.state.result[i].image + ')',
        WebKitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }
      content.push(
        <div key={i} style={ style.cell.base } onClick={ this.onCellClicked.bind(this,i) }>
          <div key="img" style={[ style.cell.image,image ]}>
          </div>
          <div style={ style.cell.text }>
            { this.state.result[i].name }
          </div>
        </div>
      );
    }
    return(
      <div style={ style.base }>
        <input style={ style.inputbase } value={ this.props.category } placeholder="Category" onChange={ this.onInputChange } />
        <div style={ style.dropdown }>
         {content}
        </div>
      </div>
    );
  }
};
let mapStateToProps = (state) => {
    return {
        category: state.launch.category
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateLaunch: (type, content) => dispatch(updateLaunch(type, content)),
    }
}

AutoComplete = connect(mapStateToProps, mapDispatchToProps)(AutoComplete);


export default AutoComplete;