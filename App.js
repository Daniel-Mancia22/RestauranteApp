
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Alert } from 'react-native';
import { AppProvider, useAppContext } from './src/contexts/AppContext';

import LoginScreen from './src/auth/LoginScreen';
import CarritoScreen from './src/screens/CarritoScreen';
import DishDetailScreen from './src/screens/DishDetailScreen';
import FavoritosScreen from './src/screens/FavoritosScreen';
import HomeScreen from './src/screens/HomeScreen';
import MenuScreen from './src/screens/MenuScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MenuStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MenuList" component={MenuScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Inicio') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Menú') iconName = focused ? 'restaurant' : 'restaurant-outline';
          else if (route.name === 'Favoritos') iconName = focused ? 'heart' : 'heart-outline';
          else if (route.name === 'Carrito') iconName = focused ? 'cart' : 'cart-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Menú" component={MenuStack} />
      <Tab.Screen name="Favoritos" component={FavoritosScreen} />
      <Tab.Screen name="Carrito" component={CarritoScreen} />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  const { logout } = useAppContext();
  const navigation = useNavigation();

  return (
    <Drawer.Navigator initialRouteName="Principal">
      <Drawer.Screen
        name="Principal"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />

      <Drawer.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
        }}
      />

      <Drawer.Screen
        name="Configuración"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />,
        }}
      />

      <Drawer.Screen
        name="Cerrar sesión"
        component={() => null}
        options={{
          drawerLabel: 'Cerrar sesión',
          drawerIcon: ({ color, size }) => <Ionicons name="log-out-outline" size={size} color={color} />,
          drawerItemStyle: { backgroundColor: '#ffe5e5' },
        }}
        listeners={{
          focus: () => {
            Alert.alert(
              'Confirmación',
              '¿Estás seguro que deseas cerrar sesión?',
              [
                { text: 'Cancelar', style: 'cancel' },
                {
                  text: 'Sí, cerrar sesión',
                  style: 'destructive',
                  onPress: () => {
                    logout();
                    navigation.reset({
                      index: 0,
                      routes: [{ name: 'Login' }],
                    });
                  },
                },
              ]
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="DishDetail" component={DishDetailScreen} options={{ title: 'Detalles del Platillo' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}