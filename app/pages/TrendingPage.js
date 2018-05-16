/**
 * TrendingPage
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import { connect } from 'react-redux'
import { Text, Container, Header, ListItem, Left, Body, Icon, Right, Title, Thumbnail } from "native-base";

import {fetchRepos} from '../actions/repos'

class TrendingPage extends Component {
	componentDidMount() {
    this.props.fetchRepos(false, true, false, 1) // isRefreshing, loading, isLoadMore, page
  }
  
  renderItem = ({ item }) => {
    return (
      <ListItem avatar>
        <Left>
           <Thumbnail source={{ uri: item.owner.avatar_url }} />
        </Left>
        <Body>
          <Text>{item.name}</Text>
          <Text note>{item.description}</Text>
        </Body>
        <Right>
          <Text note>{item.stargazers_count} stars</Text>
        </Right>
      </ListItem>
    )
  }

  render() {
    return(
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Trending JS repos</Title>
          </Body>
          <Right />
        </Header>
        <FlatList
          data={this.props.reposList}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reposList: state.repos.reposList
  }
}

export default connect(
  mapStateToProps, 
  { fetchRepos }
)(TrendingPage)