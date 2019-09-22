import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../../tourData";
class TourList extends Component {
	state = {
		tours: tourData
	};
	deleteCard = id => {
		// console.log(`clicked ${id}`);
		const tours = this.state.tours.filter(tour => tour.id !== id);
		this.setState({
			tours
		});
	};
	render() {
		const { tours } = this.state;
		return (
			<React.Fragment>
				<div className="row">
					{tours.map(({ id, ...remainingTours }) => (
						<Tour deleteCard={this.deleteCard} key={id} index={id} {...remainingTours} />
					))}
				</div>
			</React.Fragment>
		);
	}
}

export default TourList;
