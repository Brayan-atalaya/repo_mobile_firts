import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { styles } from '../../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { ScrollView } from 'react-native';
// import BottomSheet from 'reanimated-bottom-sheet';

interface Props extends DrawerScreenProps<any, any> {}

const FleteScreen = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={styles.margenHamburguesa}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" size={30} color="green" />
        </TouchableOpacity>
      ),
      headerTitle: 'Fletes',
    });
  });
  // }, []);

  const [lugarRecogida, setLugarRecogida] = React.useState('');
  const [puntoEntrega, setPuntoEntrega] = React.useState('');
  const [ahora, setAhora] = React.useState('');
  const [descripcionCarga, setDescripcionCarga] = React.useState('');
  const [precio, setPrecio] = React.useState('');
  // const [text, setText] = React.useState('');
  // const [text, setText] = React.useState('');

  return (
    <View style={styles.fleteContainer}>
      <ScrollView
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View>
          <TouchableOpacity
            style={{
              ...styles.botonGrande,
            }}
            onPress={() => navigation.navigate('TabsFlete')}>
            <Text>
              <Icon name="bus-outline" size={20} color="green" />{' '}
            </Text>
            <Text>Flete</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{ flex: 1, borderWidth: 1, borderColor: 'blue' }}> */}
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <Icon
            style={{ ...styles.iconosFlete }}
            name="navigate-circle-outline"
            size={25}
            color="grey"
          />
          <TextInput
            label="Lugar de recogida"
            value={lugarRecogida}
            onChangeText={text => setLugarRecogida(text)}
            style={{ width: '85%', height: 50, backgroundColor: 'white' }}
            placeholderTextColor={'red'}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon
            style={{ ...styles.iconosFlete }}
            name="navigate-circle-outline"
            size={25}
            color="grey"
          />
          <TextInput
            label="Punto de entrega de carga"
            value={puntoEntrega}
            onChangeText={text => setPuntoEntrega(text)}
            style={{ width: '85%', height: 50, backgroundColor: 'white' }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon
            style={{ ...styles.iconosFlete }}
            name="calendar-outline"
            size={25}
            color="grey"
          />
          <TextInput
            label="Ahora"
            value={ahora}
            onChangeText={text => setAhora(text)}
            style={{ width: '85%', height: 50, backgroundColor: 'white' }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon
            style={{ ...styles.iconosFlete }}
            name="reader-outline"
            size={25}
            color="grey"
          />
          <TextInput
            label="Describe la carga requerida"
            value={descripcionCarga}
            onChangeText={text => setDescripcionCarga(text)}
            style={{ width: '85%', height: 50, backgroundColor: 'white' }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon
            style={{ ...styles.iconosFlete }}
            name="cash-outline"
            size={25}
            color="grey"
          />
          <TextInput
            label="Ofrecer un precio"
            value={precio}
            onChangeText={text => setPrecio(text)}
            style={{ width: '85%', height: 50, backgroundColor: 'white' }}
          />
        </View>
        <TouchableOpacity style={styles.botonPedidoflete}>
          <Text style={styles.textoBotonFlete}>Flete de pedido</Text>
        </TouchableOpacity>
        {/* </View> */}
      </ScrollView>
    </View>
  );
};

export default FleteScreen;
