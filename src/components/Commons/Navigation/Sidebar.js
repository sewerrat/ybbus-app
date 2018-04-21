import React from 'react';

import routes from 'src/config/routes';
import { Container, ListItem } from 'native-base';

export default class SideBar extends React.Component {
  executeRoutesData(){
    return routes.filter(route => (route.showInMenu))
  }

  renderRow(data) {
    return (
      <ListItem
        button
        onPress={this.props.navigation.navigate(data.name)}>
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
            renderRow = {data => this.renderRow()}
          />
        </Content>
      </Container>
    )
  }
}