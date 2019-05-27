    
import React from "react";

export default class Searchbar extends React.Component {
  
  constructor(props) {
		super(props)
		this.state = {
			searchTerm: "",
			submitted: false
		}
  }

	
	handleChange = (event) => {
		this.setState({searchTerm: event.target.value})
	}
	
	sendSearchTerm = (event) => {
		this.setState({
			searchTerm: event.target.value,
			submitted: true
		})
	}

	revertChange = () => {
		this.setState({
			submitted: false
		})
	}

  render() {
    return (
      <div>
    		<input 
					type="text" 
					onChange={this.handleChange} 
					value={this.state.searchTerm} 
					placeholder="Search by keyword..."/>
				<button 
					class="myButton"
					onClick={this.sendSearchTerm} 
					value={this.state.searchTerm}
					>
				</button>
    	</div>
    );
  }
}
