import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FleteScreen from '../../screens/Flete/FleteScreen';
// import OfrecerPrecio from '../inputsFlete/OfrecerPrecio';
// import ActionSheet from '../actionSheet/ActionSheet';

const Stack = createStackNavigator();

const StackNavigatorFlete = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {/* <Stack.Screen name="FleteScreen" options={{ title:' Flete ' }} component={ FleteScreen } /> */}
      {/* <Stack.Screen name="ViewMapa" options={{ title: 'Mapa' }} component={ ViewMapa } /> */}
      <Stack.Screen name="FleteScreen" component={FleteScreen} />
      {/* <Stack.Screen name="OfrecerPrecio" component={OfrecerPrecio} /> */}
      {/* <Stack.Screen name="ActionSheet" component={ActionSheet} /> */}
      {/* <Stack.Screen name="MisSolicitudesScreen" component={MisSolicitudesScreen} /> */}
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigatorFlete;
