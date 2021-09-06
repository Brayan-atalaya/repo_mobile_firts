import { StyleSheet } from 'react-native';

export const colores = {
  primary: 'green',
};

export const styles = StyleSheet.create({
  margenHamburguesa: {
    marginLeft: 15,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 25,
  },
  menuBoton: {
    flexDirection: 'row',
    marginRight: 10,
  },
  menuTexto: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  iconos: {
    // marginTop: 2,
  },

  // Flete
  fleteContainer: {
    flex: 1,
    borderWidth: 10,
    borderColor: 'white',
  },
  botonGrande: {
    width: 100,
    height: 60,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  iconosFlete: {
    marginTop: 15,
    marginRight: 10,
  },
  textoBotonFlete: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
  },
  botonPedidoflete: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'green',
    borderRadius: 50,
    marginTop: 30,
  },
});
