var React = require('react');

var Radium = require('radium');

import SearchPanel from "./search/SearchPanel"


export default class Search extends React.Component {
  constructor() {
    super();
  }
  render(){
    return(
      <div style={{display: 'flex'}}>
        <SearchPanel />
      </div>
    );
  }

};
