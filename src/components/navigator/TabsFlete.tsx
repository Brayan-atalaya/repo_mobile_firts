import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { colores, styles } from '../../theme/appTheme';
import StackNavigatorFlete from './StackNavigatorFlete';
import { StackNavigatorMisSolicitudes } from './StackNavigatorMisSolicitudes';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createMaterialBottomTabNavigator();
interface Props extends DrawerScreenProps<any, any> {}

const TabsFlete = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={styles.margenHamburguesa}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" size={30} color="green" />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <Tab.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'StackNavigatorFlete':
              iconName = 'add-circle-outline';
              break;
            case 'StackNavigatorMisSolicitudes':
              iconName = 'newspaper-outline';
              break;
          }
          return <Icon name={iconName} size={24} color={color} />;
        },
      })}>
      <Tab.Screen
        name="StackNavigatorFlete"
        options={{ title: 'Crear Solicitud' }}
        component={StackNavigatorFlete}
      />
      <Tab.Screen
        name="StackNavigatorMisSolicitudes"
        options={{ title: 'Mis Solicitudes' }}
        component={StackNavigatorMisSolicitudes}
      />
    </Tab.Navigator>
  );
};

export default TabsFlete;
