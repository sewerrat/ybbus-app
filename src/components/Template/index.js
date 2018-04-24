import React, { Component } from 'react';
import { View } from 'react-native';
import {Container, Content} from 'native-base';

import AppHeader from './Header';
import AppFooter from './Footer';


export default class MainFrame extends Component{

	renderContent() {
		return (
			<View>Comming soon</View>
		)
	}

	renderHeader() {
		return (
			<AppHeader navigation={this.props.navigation}/>
		);
	}

	renderFooter() {
		return (
			<AppFooter />
		);
	}
	
	render() {
		return (
			<Container>
        {this.renderHeader()}
        <Content padder>
          {this.renderContent()}
        </Content>
        {this.renderFooter()}
      </Container>
		)
	}
}