import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: 'AlBears',
			userData: [],
			userRepos: [],
			perPage: 5

		}
	}
	render(){
		return (
				<div>
					{this.props.clientId}
				</div>
			)
	}
}
App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};
App.defaultProps = {
	clientId: '1a59f155dfda61d91e6e',
	clientSecret: '87d30941c72f51e44741efb886fd807af7c9f16e'
}

export default App