import { useNavigation } from '@react-navigation/native';
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppContext } from '../contexts/AppContext';

const FavoritosScreen = () => {
  const { favorites, toggleFavorite } = useAppContext();
  const navigation = useNavigation();

  const handlePress = (dish) => {
    navigation.navigate('DishDetail', { dish });
  };

  const confirmDelete = (dish) => {
    Alert.alert(
      'Quitar de Favoritos',
      `¿Seguro que quieres quitar "${dish.name}" de tus favoritos?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sí', onPress: () => toggleFavorite(dish) }
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => handlePress(item)}>
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => confirmDelete(item)}>
        <Text style={styles.delete}>Quitar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tus Platillos Favoritos</Text>
      {favorites.length === 0 ? (
        <Text style={styles.empty}>No tienes platillos en favoritos</Text>
      ) : (
        <FlatList
          data={favorites}
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

export default FavoritosScreen;