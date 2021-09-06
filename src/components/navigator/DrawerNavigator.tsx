import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TabsFlete from './TabsFlete';
import { styles } from '../../theme/appTheme';
import ViewMapa from '../../screens/Map';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="ViewMapa" component={ViewMapa} />
      <Drawer.Screen
        name="TabsFlete"
        options={{ title: 'TabsFlete' }}
        component={TabsFlete}
      />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
        />
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('TabsFlete')}>
          <Icon
            style={styles.iconos}
            name="bus-outline"
            size={25}
            color="grey"
          />
          <Text style={styles.menuTexto}> Flete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBoton}>
          <Icon
            style={styles.iconos}
            name="settings-outline"
            size={25}
            color="grey"
          />
          <Text style={styles.menuTexto}> Configuraciones</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBoton}>
          <Icon
            style={styles.iconos}
            name="information-circle-outline"
            size={25}
            color="grey"
          />
          <Text style={styles.menuTexto}> Ayuda</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerNavigator;
