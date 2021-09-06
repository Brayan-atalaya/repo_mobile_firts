import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const MisSolicitudesScreen = ({ navigation }: Props) => {
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
  // }, []);

  return (
    <View
      style={{
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
      }}>
      <Text
        style={{
          fontSize: 19,
          fontWeight: 'bold',
        }}>
        Aún no tiene solicitudes. Cree su primera solicitud ahora
      </Text>
    </View>
  );
};
