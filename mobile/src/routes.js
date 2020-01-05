import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Image } from 'react-native';
import SignIn from './pages/SignIn';

import Dashboard from './pages/HelpOrders';
import CheckIns from './pages/Checkins';
import NewQuestion from './pages/NewQuestion';
import Answers from './pages/Answers';

const Logo = require('./assets/images/logo-horizontal.png');

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),

        App: createStackNavigator(
          {
            ScreensTab: createBottomTabNavigator(
              {
                CheckIns,
                Dashboard,
              },
              {
                tabBarOptions: {
                  keyboardHidesTabBar: true,
                  headerBackgroundTransitionPreset: 'fade',
                  activeTintColor: '#ee4e62',
                  inactiveTintColor: '#999',
                  style: {
                    backgroundColor: '#fff',
                  },
                },
              }
            ),
            NewQuestion,
            Answers,
          },
          {
            defaultNavigationOptions: {
              headerBackground: (
                <Image
                  style={{ alignSelf: 'center', marginTop: 3 }}
                  source={Logo}
                />
              ),
              headerStyle: {},
              headerTintColor: '#333',
              headerLeftContainerStyle: {
                marginLeft: 10,
              },
            },
          }
        ),
      },

      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
