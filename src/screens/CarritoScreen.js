import { useNavigation } from '@react-navigation/native';
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppContext } from '../contexts/AppContext';

const CarritoScreen = () => {
  const { cart, toggleCart } = useAppContext();
  const navigation = useNavigation();

  const handlePress = (dish) => {
    navigation.navigate('DishDetail', { dish });
  };

  const confirmDelete = (dish) => {
    Alert.alert(
      'Quitar del Carrito',
      `¿Seguro que quieres quitar "${dish.name}" del carrito?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sí', onPress: () => toggleCart(dish) }
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => handlePress(item)}>
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => confirmDelete(item)}>
        <Text style={styles.delete}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu Carrito</Text>
      {cart.length === 0 ? (
        <Text style={styles.empty}>Tu carrito está vacío</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f5f5f5', 
    padding: 10 
  },

  title: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 15, 
    textAlign: 'center' 
  },

  empty: { 
    textAlign: 'center', 
    color: '#999', 
    marginTop: 20 
  },

  item: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 1,
  },

  name: { 
    fontSize: 16, 
    color: 'tomato', 
    fontWeight: 'bold' 
  },

  delete: { 
    color: 'red', 
    fontWeight: 'bold'
  },
});

export default CarritoScreen;