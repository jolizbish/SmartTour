import React from 'react';
import PropTypes from 'prop-types';
// import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionsCreators';
import Profile from '../Profile.jsx';
import MySessions from '../MySessions.jsx';
import Menu from '../Menu.jsx';

const ProfilePage = (props) => {
  console.log('ProfilePage props: ', props);
  return (
    <div>
      <h1><a href='/main'>BrainStorm</a></h1>
      <Menu />
      <h2>Welcome, you genius you!</h2>
      <Profile history={props.history} user={props.user}/>
      <MySessions />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    comments: state.comments,
    detailViewVisible: state.detailViewVisibles,
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

ProfilePage.propTypes = {
  history: PropTypes.object.isRequired
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage));
