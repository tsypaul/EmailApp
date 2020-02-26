import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Main from "../screens/Main";
import Mails from "../screens/Mails";
import NewMail from "../screens/NewMail";

export default createStackNavigator(
  {
    Main,
    Mails,
    NewMail
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerTitle: "Email App"
    }
  }
);
