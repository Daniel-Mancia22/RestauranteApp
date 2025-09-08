import { Image, StyleSheet, Text, View } from 'react-native';

const MenuItem = ({ dish }) => {
  return (
    <View style={styles.container}>
      <Image source={dish.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description}>{dish.description}</Text>
        <Text style={styles.price}>${dish.price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
    elevation: 2,
  },

  image: {
    width: 100,
    height: 100,
  },

  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'tomato',
  },
});

export default MenuItem;