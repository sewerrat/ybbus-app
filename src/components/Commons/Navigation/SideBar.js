import React from 'react';

import {routes} from 'config/navigation';
import { Container, Content, List, ListItem, Text } from 'native-base';

export default class SideBar extends React.Component {
  executeRoutesData(){
    return routes.filter(route => (route.showInMenu))
  }

  renderRow(data) {
    return (
      <ListItem
        button
        onPress={() => this.props.navigation.navigate(data.name)}>
        <Text>{data.title}</Text>
      </ListItem>
    )
  }

  render(){
    return(
      <Container>
        <Content>
          <List
            dataArray={this.executeRoutesData()}
            renderRow = {data => this.renderRow(data)}
          />
        </Content>
      </Container>
    )
  }
}