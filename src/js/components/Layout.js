import React from "react"

import Footer from "./Footer.js"
import Header from "./Header.js"

export default class Layout extends React.Component {
	// states only gets used if component have internal value ( means only afects this component Layout)
	// so all other cases we will be using props
	// Props can be injected to all other components
	constructor() {
		super();
		this.state = {title : "Welcome!"}
	}

	render() {		
		setInterval(()=>{
			this.setState({title : "Welcome Thomas !"})
		},1500)
		//const title = "Welcome to Reactjs"
		return (
			<div>				
				<Header title={this.state.title} />
				<Header title={"Other title"} />
				<Footer />
			</div>
			
		)
	}
}