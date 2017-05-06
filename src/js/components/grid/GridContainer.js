import React from "react";
var Radium = require('radium');

import BigBannerGrid from "./BigBannerGrid";
import MidGrid from "./MidGrid";
import VHalfGrid from "./VHalfGrid";
import VHalfFancyGrid from "./VHalfFancyGrid";
import VHalfAsymmetryGrid from "./VHalfAsymmetryGrid";
import HHalfAsymmetryGrid from "./HHalfAsymmetryGrid";

export default class GridContainer extends React.Component {
	render() {
		var style = {
			textAlign: 'center',
			innerContainer: {
				width: '100%',
				marginTop: '100px',
			}
		};
		return (
			<div 
				style={
					style
				}>
				<div>
					<div style={ style.innerContainer }>
						<BigBannerGrid />
						<MidGrid imgUrl="local" />
						<MidGrid imgUrl="food" />
						<HHalfAsymmetryGrid imgUrl="news" />
						<VHalfFancyGrid />
						<VHalfAsymmetryGrid />
						<MidGrid color="#72A752" />
						<MidGrid color="#552E2E" />
						<VHalfGrid />
					</div>
				</div>
			</div>
		);
	}
}