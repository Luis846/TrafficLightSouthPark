import React from "react";
import { Lights } from "./lights.js";
//include images into your bundle

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<span>
				<Lights />
			</span>
		);
	}
}
