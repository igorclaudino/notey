import React from "react";
import { Text } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

import Login from "./pages/Login";
import StepOneNewAccount from "./pages/StepOneNewAccount";
import StepTwoNewAccount from "./pages/StepTwoNewAccount";
import MyNotes from "./pages/MyNotes";
import SharedWithMe from "./pages/SharedWithMe";
import MyProfile from "./pages/MyProfile";
import AuthLoading from "./pages/AuthLoading";

const AuthStack = createStackNavigator(
  { Login, StepOneNewAccount, StepTwoNewAccount },
  {
    headerMode: "none",
    headerBackTitleVisible: true
  }
);
const AppStack = createBottomTabNavigator(
  {
    "Compartilhadas Comigo": SharedWithMe,
    "Minhas notas": MyNotes,
    "Meu Perfil": MyProfile
  },
  {
    initialRouteName: "Minhas notas",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Minhas notas") {
          iconName = `note-text`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          //IconComponent = HomeIconWithBadge;
        } else if (routeName === "Compartilhadas Comigo") {
          iconName = `account-multiple`;
        } else if (routeName === "Meu Perfil") {
          iconName = `account-edit`;
        }

        // You can return any component that you like here!
        return (
          <Icon
            name={iconName}
            size={28}
            style={{ marginTop: 5 }}
            color={tintColor}
          />
        );
      },
      tabBarLabel: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        return (
          <Text
            style={{
              alignSelf: "center",
              marginBottom: 5,
              fontSize: 12,
              fontFamily: "Roboto",
              lineHeight: 14,
              color: focused ? tintColor : "#666",
              fontWeight: focused ? "bold" : "normal",
              textAlign: "center"
            }}
          >
            {routeName}
          </Text>
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "#9B56BB",
      inactiveTintColor: "#666",
      pressOpacity: true,
      adaptive: true
    }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
