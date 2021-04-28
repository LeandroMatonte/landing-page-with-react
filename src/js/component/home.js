import React from "react";
import { NavBar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";

export function Home() {
	let cards = [
		{
			titulo: "carta1",
			descripcion:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat porta arcu, quis dictum massa pellentesque convallis. Curabitur quis venenatis justo, sed iaculis sapien. Sed arcu felis, efficitur eu elementum a, sollicitudin at erat.",
			img: "https://picsum.photos/id/1/500/325"
		},
		{
			titulo: "carta2",
			descripcion:
				"Ut consectetur molestie commodo. Proin pharetra, ligula sit amet pulvinar elementum, dui magna commodo elit, ac tincidunt sapien nisl hendrerit eros.",
			img: "https://picsum.photos/id/2/500/325"
		},
		{
			titulo: "carta3",
			descripcion:
				"Cras volutpat facilisis finibus. Nulla sit amet magna mi. Aliquam quis ligula rutrum, pretium elit nec, laoreet sem. Sed justo quam, interdum sit amet nunc sed, tempus dapibus risus.",
			img: "https://picsum.photos/id/3/500/325"
		},
		{
			titulo: "carta4",
			descripcion:
				"Sed nulla nibh, venenatis sed fringilla vel, sagittis et enim. Nullam tincidunt varius tortor porttitor malesuada. Nulla vel libero viverra, efficitur ante sodales, lobortis sem. Ut et sollicitudin quam, vel lacinia mi.",
			img: "https://picsum.photos/id/4/500/325"
		}
	];
	return (
		<div>
			<NavBar />
			<div className="container mt-4">
				<Jumbotron />
				<div className="row mb-2">
					{cards.map((card, i) => {
						return (
							<Card
								titulo={card.titulo}
								descripcion={card.descripcion}
								img={card.img}
								key={i}
							/>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
}
