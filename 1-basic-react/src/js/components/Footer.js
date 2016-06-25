import React from "react"

export default class Footer extends React.Component {
	handleChange(e) {
		const value = e.target.value;
		this.props.changeFooter(value);
	}

	render() {

		return (
			<div>
				<footer>
				  <h1>{this.props.footer}</h1>
				  <input onChange={this.handleChange.bind(this)} />
				</footer>
			</div>	
		);
	}
}