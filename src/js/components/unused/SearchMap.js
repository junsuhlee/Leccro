import React from "react";
import GoogleMap from 'google-map-react';
import MapMarker from '../map/MapMarker';
var Radium = require('radium');


class SearchMap extends React.Component {
	static defaultProps = {
	    center: {lat: 59.938043, lng: 30.337157},
	    zoom: 13,
	    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
	 };

	constructor(props) {
		super(props);
	}
	fireHover(key, hoverState) {
		this.refs[key].toggleHover(hoverState);
	}
	componentWillMount() {

  	}
	render() {
		var style = {
			base: {
				// verticalAlign: 'bottom',
				textAlign: 'center',
				width: '34%',
				display: 'flex',
				height: '100vh'
			}
		};
	
		
		return (
			<div 
				style={
					style.base
				}>
				<GoogleMap
			        defaultCenter={this.props.center}
			        defaultZoom={this.props.zoom}>
			        <MapMarker ref="Coffee Bean" initHover={ this.initHover } lat={59.945413} lng={30.337844} num={'1'} name={'Coffee Bean'} />
			    	<MapMarker ref="Groundwork" initHover={ this.initHover } lat={59.935413} lng={30.335844} num={'2'} name={'Groundwork'} />
			    	<MapMarker ref="Target" initHover={ this.initHover } lat={59.925413} lng={30.354844} num={'3'} name={'Target'} />
			    	<MapMarker ref="Blue Bottle" initHover={ this.initHover } lat={59.933413} lng={30.335844} num={'4'} name={'Blue Bottle'} />
			    	<MapMarker ref="Starbucks" initHover={ this.initHover } lat={59.936413} lng={30.327844} num={'5'} name={'Starbucks'} />
			    	<MapMarker ref="Julius Meinl" initHover={ this.initHover } lat={59.935213} lng={30.345844} num={'6'} name={'Julius Meinl'} />
			    </GoogleMap>
				
			</div>
		);
	}
}

module.exports = Radium(SearchMap);