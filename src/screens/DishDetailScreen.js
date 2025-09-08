import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppContext } from '../contexts/AppContext';

const DishDetailScreen = ({ route }) => {
  const { dish } = route.params;
  const { favorites, cart, toggleFavorite, toggleCart } = useAppContext();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.some(item => item.id === dish.id));
    setIsInCart(cart.some(item => item.id === dish.id));
  }, [favorites, cart]);

  const handleFavorite = () => {
    toggleFavorite(dish);
    Alert.alert(
      isFavorite ? 'Removido de favoritos' : 'Agregado a favoritos',
      `El platillo ${dish.name} ha sido ${isFavorite ? 'removido' : 'agregado'} a tus favoritos`
    );
  };

  const handleAddToCart = () => {
    toggleCart(dish);
    Alert.alert(
      isInCart ? 'Removido del carrito' : 'Agregado al carrito',
      `El platillo ${dish.name} ha sido ${isInCart ? 'removido' : 'agregado'} a tu carrito`
    );
  };

  return (
    <View style={styles.container}>
      <Image source={dish.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.price}>${dish.price.toFixed(2)}</Text>
        <Text style={styles.description}>{dish.description}</Text>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.button, isFavorite ? styles.favoriteActive : styles.favoriteInactive]}
            onPress={handleFavorite}
          >
            <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={24} color="white" />
            <Text style={styles.buttonText}>
              {isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, isInCart ? styles.cartActive : styles.cartInactive]}
            onPress={handleAddToCart}
          >
            <Ionicons name={isInCart ? 'cart' : 'cart-outline'} size={24} color="white" />
            <Text style={styles.buttonText}>
              {isInCart ? 'Quitar del Carrito' : 'Agregar al Carrito'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f5f5f5' 
  },

  image: { 
    width: '100%', 
    height: 250 
  },

  details: { 
    flex: 1, 
    padding: 20 
  },

  name: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },

  price: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: 'tomato', 
    marginBottom: 15 
  },

  description: { 
    fontSize: 16, 
    color: '#666', 
    marginBottom: 20, 
    lineHeight: 22 
  },

  buttons: {
     marginTop: 20 
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },

  favoriteActive: { 
    backgroundColor: 'green' 
  },

  favoriteInactive: { 
    backgroundColor: 'blue'
  },

  cartActive: { 
    backgroundColor: 'green' 
  },

  cartInactive: { 
    backgroundColor: 'blue' 
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default DishDetailScreen;