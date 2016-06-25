import React from "react"

export default class Layout extends React.Component {
	constructor() {
		super();
		this.name = "Thomas";
	}

	calculateVal(a,b) {
		return a + b;
	}
	render() {
		return (
			<div>
				<h1>It {this.name}!!</h1>
				<h2>4 + 3 = {this.calculateVal(4,3)}</h2>
				<h3>how is it ?</h3>
			</div>
		);
	}
}