import { StyleSheet, Text, View } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a la pantalla de Configuración de la aplicación</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

  text: {
    fontSize: 18,
    textAlign: 'center',
    color: 'tomato'
  },
});

export default SettingsScreen;