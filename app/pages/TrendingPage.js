/**
 * TrendingPage
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux'
import { Text, Container, Header, ListItem, Left, Body, Icon, Right, Title, Thumbnail } from "native-base";

import {fetchRepos} from '../actions/repos'

class TrendingPage extends Component {
	componentDidMount() {
    this.props.fetchRepos(this.props.currentPage, isLoadMore = false)
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

  renderFooter = () => {
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };


  handleLoadMore = () => {
    console.log("load more!!, newPage: ", this.props.currentPage);
    if (this.props.loading == false) (
      this.props.fetchRepos(this.props.currentPage, isLoadMore = true)
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
          keyExtractor={item => item.id.toString()}
          onEndReached={this.handleLoadMore}
          onEndThreshold={0}
          ListFooterComponent={this.renderFooter}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.repos.currentPage,
    loading: state.repos.loading,
    isLoadMore: state.repos.isLoadMore,
    reposList: state.repos.reposList
  }
}

export default connect(
  mapStateToProps, 
  { fetchRepos }
)(TrendingPage)