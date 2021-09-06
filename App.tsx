import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/components/navigator/DrawerNavigator';


export const App = () => {

    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}
