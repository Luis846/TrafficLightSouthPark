import React from "react";

//create your first component
export class Lights extends React.Component {
	constructor() {
		super();

		this.state = {
			clicked: "red"
		};
	}
	render() {
		let redClicked = "";
		let yellowClicked = "";
		let greenClicked = "";
		let backgroundGreen = document.querySelector("body");

		if (this.state.clicked === "red") {
			redClicked = "light-shadow-red";
			backgroundGreen.className = "red-go";
		} else if (this.state.clicked === "yellow") {
			yellowClicked = "light-shadow-yellow";
			backgroundGreen.className = "yellow-go";
		} else if (this.state.clicked === "green") {
			greenClicked = "light-shadow-green";
			backgroundGreen.className = "green-go";
		}
		return (
			<div>
				<div className="mx-auto text-center">
					<div className="pole" />
					<div id="container" className="rounded">
						<div
							onClick={() => this.setState({ clicked: "red" })}
							className={"redlight" + " " + redClicked}
						/>

						<div
							onClick={() => this.setState({ clicked: "yellow" })}
							className={"yellowlight" + " " + yellowClicked}
						/>
						<div
							onClick={() => this.setState({ clicked: "green" })}
							className={"greenlight" + " " + greenClicked}
						/>
					</div>
				</div>
			</div>
		);
	}
}
