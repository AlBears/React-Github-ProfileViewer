import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';

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
	//Get user data
	getUserData(){
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({userData: data});
				console.log(data);
			}.bind(this),
			error: function(xhr, status, err){
				this.setState({username: null});
				alert(err);
			}.bind(this)
		});
	}
	componentDidMount(){
		this.getUserData()
	}
	render(){
		return (
				<div>
					<Profile userData = {this.state.userData}/>
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