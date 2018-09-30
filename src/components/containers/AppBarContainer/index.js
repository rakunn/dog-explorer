import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppBar from '../../presentational/AppBar';
import updateFilterQuery from "../../../store/actions/updateFilterQuery";

class AppBarContainer extends Component {
  static propTypes = {
    filterQuery: PropTypes.string.isRequired,
    updateFilterQuery: PropTypes.func.isRequired,
  };

  render() {
    return (
      <AppBar
        filterQuery={this.props.filterQuery}
        updateFilterQuery={this.props.updateFilterQuery}
      />
    );
  }
}

const mapStateToProps = ({ filterQuery }) => {
  return {
    filterQuery,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFilterQuery: (newFilterQuery) => dispatch(updateFilterQuery(newFilterQuery)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBarContainer);
