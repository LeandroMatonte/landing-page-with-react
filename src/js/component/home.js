import React from "react";
import { NavBar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";

export function Home() {
	return (
		<div>
			<NavBar />
			<div className="container mt-4">
				<Jumbotron />
				<div className="row mb-2">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
}
