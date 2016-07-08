import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'kortby',
      userData: [],
      userRepos: [],
      perPage: 10
    };
  }

  // Get user data from GitHub
  getUserData() {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: ((data) => {
        this.setState({
          userData: data
        });
      }),
      error: ((xhr, status, err) => {
        this.setState({username: null});
        alert(err);
      })
    });
  }

  // Get user repos
  getUserRepos() {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created',
      dataType: 'json',
      cache: false,
      success: ((data) => {
        this.setState({
          userRepos: data
        });
      }),
      error: ((xhr, status, err) => {
        this.setState({username: null});
        alert(err);
      })
    });
  }

  handleFormSubmit(username) {
    this.setState({username}, function () {
      this.getUserData();
      this.getUserRepos();
    });
  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }

  render() {
    return(
      <div>
        <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
        <Profile {...this.state} />
      </div>
    );
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};
App.defaultProps = {
  clientId: '177a0d23baa710f6f78e',
  clientSecret: '44b31d585dd52a139fb014d9656e52f71b29002d'
};

export default App;