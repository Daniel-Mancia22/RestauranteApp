import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const irAlMenu = () => {
    navigation.navigate('Menú'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Restaurante App</Text>
      <Text style={styles.subtitle}>
        Explora nuestro menú y encuentra tus platillos favoritos
      </Text>

      <TouchableOpacity style={styles.button} onPress={irAlMenu}>
        <Text style={styles.buttonText}>Ver Menú</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },

  button: {
    backgroundColor: 'tomato',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;