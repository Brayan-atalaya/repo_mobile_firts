import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MisSolicitudesScreen } from '../../screens/MyRequest/MisSolicitudesScreen';

const Stack = createStackNavigator();

export const StackNavigatorMisSolicitudes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MisSolicitudesScreen"
        options={{ title: ' Mis Solicitudes ' }}
        component={MisSolicitudesScreen}
      />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
};
