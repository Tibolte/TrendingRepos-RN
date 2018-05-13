/**
 * TrendingPage
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux'

import {fetchRepos} from '../actions/repos';

class TrendingPage extends Component {
	componentDidMount() {
    console.warn("component did mount");
    this.props.fetchRepos();
	}

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Here should be our Github trending repos!
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(
  mapStateToProps, 
  { fetchRepos }
)(TrendingPage)

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#F5FCFF',
	},
	welcome: {
	  fontSize: 20,
	  textAlign: 'center',
	  margin: 10,
	}
});