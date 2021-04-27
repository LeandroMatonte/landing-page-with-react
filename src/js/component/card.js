import React from "react";

export function Card() {
	return (
		<div className="col-sm-12 col-md-3">
			<div className="card m-1">
				<img
					src="https://picsum.photos/500/325"
					className="card-img-top"
					alt="..."></img>
				<div className="card-body text-center">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						{`Some quick example text to build on the card title and
						make up the bulk of the card's content.`}
					</p>
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
