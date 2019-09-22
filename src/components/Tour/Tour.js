import React from "react";
import "./Tour.scss";
class Tour extends React.Component {
	state = {
		show: false
	};
	handleClick = e => {
		this.setState(prevState => {
			return {
				show: !prevState.show
			};
		});
	};
	handleDelete = e => {
		this.props.deleteCard(this.props.index);
	};
	render() {
		const { img, city, name, info } = this.props;
		const { show } = this.state;
		return (
			<div className="col-lg-3 col-sm-6 mb-3">
				<div className="card h-100">
					<div className="card__image">
						<img className="card-img-top" src={img} alt={name} />
						<div className="times__icon" onClick={this.handleDelete}>
							<i className="fa fa-2x fa-times-circle" aria-hidden="true" />
						</div>
					</div>

					<div className="card-body">
						<h5 className="card-title text-capitalize mb-1"> {city} </h5>
						<div className="mb-2">
							<small className="font-weight-bold"> {info} </small>
						</div>
						<button className="btn btn-primary text-white" onClick={this.handleClick}>
							View More
						</button>
						{show && <p className="card-text pt-3"> {info} </p>}
					</div>
				</div>
			</div>
		);
	}
}

export default Tour;
