import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="col-sm-12 col-md-3">
			<div className="card m-1">
				<img src={props.img} className="card-img-top" alt="..."></img>
				<div className="card-body text-center">
					<h5 className="card-title">{props.titulo}</h5>
					<p className="card-text">{props.descripcion}</p>
				</div>
				<div className="card-footer text-center">
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	titulo: PropTypes.string,
	descripcion: PropTypes.string,
	img: PropTypes.string
};
