import React from 'react';
import { View, Text, List, ListItem } from 'native-base';
import Template from 'components/Template';

export default class HomeScreen extends Template {
  renderCurrentTripList() {
    return (
      this.props.featuredLines.map(line => this.renderCurrentTripListFragment(line))
    );
  }

  renderCurrentTripListFragment(line) {
    <List>
      {line.currentTrips.map(trip => (
        <ListItem >
          <Body>
            <Text>{trip.brandName} - {trip.busType}</Text>
            <Text note>{trip.busNumber} - {trip.phoneNumbe}</Text>
          </Body>
          <Right>
            <Button transparent success onPress = {this.props.callVendor()}>
              <Text>Gọi</Text>
            </Button>
          </Right>
        </ListItem>
      ))}
    </List>
  }
  renderContent() {
    return (
      <View>
        <List>
          {this.renderCurrentTripList()}
        </List>
      </View>
    )
  }
}