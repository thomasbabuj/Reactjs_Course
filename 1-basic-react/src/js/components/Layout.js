import React from "react"

import Footer from "./Footer.js"
import Header from "./Header.js"

export default class Layout extends React.Component {
	// states only gets used if component have internal value ( means only afects this component Layout)
	// so all other cases we will be using props
	// Props can be injected to all other components
	constructor() {
		super();
		this.state = {title : "Welcome!", footer : "This is my page footer.."}
	}

	changeTitle(title) {
		this.setState({title})
	}

	changeFooter(footer) {
		this.setState({footer})
	}

	render() {	
		return (
			<div>				
				<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />				
				<Footer changeFooter={this.changeFooter.bind(this)} footer={this.state.footer}/>
			</div>
			
		)
	}
}