import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
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
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />,app);