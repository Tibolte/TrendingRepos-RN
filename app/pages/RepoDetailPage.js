/**
 * RepoDetailPage
 * @flow
 */

import React, { Component } from 'react'
import { Container, Content, Text, Header, Body, Title, Left, Right, Button, Icon } from 'native-base';

export default class RepoDetailPage extends Component {

  static navigationOptions = {
    header: null,
  };

  render(){
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
             <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Details</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text>
            This is Content Section
          </Text>
        </Content>
      </Container>
    ) 
  }
}