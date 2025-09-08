import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Nuevo estado

  const toggleFavorite = (dish) => {
    const exists = favorites.some((item) => item.id === dish.id);
    if (exists) {
      setFavorites(favorites.filter((item) => item.id !== dish.id));
    } else {
      setFavorites([...favorites, dish]);
    }
  };

  const toggleCart = (dish) => {
    const exists = cart.some((item) => item.id === dish.id);
    if (exists) {
      setCart(cart.filter((item) => item.id !== dish.id));
    } else {
      setCart([...cart, dish]);
    }
  };

  const logout = () => {
    setFavorites([]);
    setCart([]);
    setIsAuthenticated(false);
  };

  return (
    <AppContext.Provider value={{ favorites, cart, toggleFavorite, toggleCart, logout, isAuthenticated }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);