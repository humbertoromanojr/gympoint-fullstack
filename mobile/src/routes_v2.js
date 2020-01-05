import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        App: createBottomTabNavigator(
          {
            CheckIns: createStackNavigator(
              {
                CheckIns,
                Answers,
                NewQuestion,
                Dashboard,
              },
              {
                defaultNavigationOptions: {
                  headerBackground: (
                    <Image
                      style={{ alignSelf: 'center', marginTop: 3 }}
                      source={Logo}
                    />
                  ),
                  headerTintColor: '#333',
                  headerLeftContainerStyle: {
                    marginLeft: 10,
                  },
                },
              }
              /*               {
                navigationOptions: {
                  tabBarLabel: 'Check-ins',
                  tabBarIcon: ({ tintColor }) => (
                    <Icon name="room" size={20} color={tintColor} />
                  ),
                },
              } */
            ),
            Dashboard: createStackNavigator(
              {
                Dashboard,
                CheckIns,
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
                  headerTintColor: '#333',
                  headerLeftContainerStyle: {
                    marginLeft: 10,
                  },
                },
              }
              /*  {
                navigationOptions: {
                  tabBarLabel: 'Pedir ajuda',
                  tabBarIcon: ({ tintColor }) => (
                    <Icon name="help" size={20} color={tintColor} />
                  ),
                },
              } */
            ),
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#ee4e62',
              inactiveTintColor: '#999',
              style: {
                backgroundColor: '#fff',
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
