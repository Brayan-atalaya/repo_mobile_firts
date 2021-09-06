import React, { useState, useRef, LegacyRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

const ViewMapa = ({ navigation }: Props) => {
  const [state] = useState({
    pickupCords: {
      latitude: 6.217,
      longitude: -75.567,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    droplocationCords: {
      latitude: 6.333,
      longitude: -75.55,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });
  const [showButtonSheet, setShowButtonSheet] = useState(true);

  const mapRef: LegacyRef<MapView> = useRef(null);
  const { pickupCords, droplocationCords } = state;
  const GOOGLE_MAPS_APIKEY = 'AIzaSyD2AyKdeSXs-MX2-fwMymN1LZ2z7onhxuU';

  const onShowButtonSheet = () => setShowButtonSheet(true);

  const onHideButtonSheet = () => setShowButtonSheet(false);

  return (
    <>
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFill}
        initialRegion={pickupCords}
        onTouchMove={onHideButtonSheet}
        onTouchEnd={onShowButtonSheet}>
        <Marker coordinate={pickupCords} />
        <Marker coordinate={droplocationCords} />
        <MapViewDirections
          origin={pickupCords}
          destination={droplocationCords}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
          onReady={result => {
            mapRef.current?.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: 30,
                bottom: 300,
                left: 30,
                top: 100,
              },
            });
          }}
        />
      </MapView>
      <View
        style={{
          height: 50,
          width: 50,
          elevation: 10,
          backgroundColor: 'green',
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          marginLeft: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      {showButtonSheet && (
        <View
          style={{
            height: 100,
            width: '100%',
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 0,
          }}>
          <View style={{ marginLeft: 15, marginTop: 10 }}>
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
        </View>
      )}
    </>
  );
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,

//     },
// })

export default ViewMapa;
