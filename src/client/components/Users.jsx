import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/actions';

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }
  render() {
    return (
      <div>
        Heres a big list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

// not using connect/Provider so we can render once on the server
// call store.dispatch manually, return as a promise
function loadData(store) {
  return store.dispatch(fetchUsers());
}

export { loadData };
export default connect(mapStateToProps, { fetchUsers })(Users);
