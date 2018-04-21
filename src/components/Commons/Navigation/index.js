import React, { Component } from "react";
import SideBar from "./sidebar";
import { DrawerNavigator } from "react-navigation";
import routes from 'src/config/routes';

const GenerateNavigationProps = () => {
  var navs = {};
  routes.forEach(route => {
    navs[route.name] = {
      screen: route.screen
    };
  });
  return navs;
};

const MainRouter = DrawerNavigator(
  GenerateNavigationProps(),
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default MainRouter;