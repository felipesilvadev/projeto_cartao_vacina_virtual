import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import VacinasMinistradas from './pages/VacinasMinistradas';
import VacinasAgendadas from './pages/VacinasAgendadas';
import CalendarioVacinas from './pages/CalendarioVacinas';
import Perfil from './pages/PerfilPaciente';

Icon.loadFont();

export default (signedIn = false) => createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createMaterialBottomTabNavigator(
          {
            Ministradas: {
              screen: VacinasMinistradas,
              navigationOptions: () => ({
                tabBarIcon: () => (
                  <Icon name="stethoscope" size={20} color="#fff" />
                ),
              }),
            },

            Agendadas: {
              screen: VacinasAgendadas,
              navigationOptions: () => ({
                tabBarIcon: () => (
                  <Icon name="calendar-check-o" size={20} color="#fff" />
                ),
              }),
            },

            Calendário: {
              screen: CalendarioVacinas,
              navigationOptions: () => ({
                tabBarIcon: () => (
                  <Icon name="calendar" size={20} color="#fff" />
                ),
              }),
            },

            Perfil: {
              screen: Perfil,
              navigationOptions: () => ({
                tabBarIcon: () => <Icon name="user" size={20} color="#fff" />,
              }),
            },
          },
          {
            barStyle: {
              backgroundColor: '#0047ab',
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
