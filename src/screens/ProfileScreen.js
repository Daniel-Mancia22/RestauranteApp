import { useState } from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

// Fotos locales
import avatarA from '../utils/ft.jpg';
import avatarB from '../utils/ft1.jpg';

const { width } = Dimensions.get('window');

export default function ProfileScreen() {
  const userFullName = 'Daniel Mancia';
  const userEmail = 'dmancia23@gmail.com';

  const [avatarSource, setAvatarSource] = useState(avatarA);

  const handleToggleAvatar = () => {
    setAvatarSource((prev) => (prev === avatarA ? avatarB : avatarA));
  };

  const CARD_WIDTH = Math.min(width - 32, 380);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.card, { width: CARD_WIDTH }]}>
        <View style={styles.profileRow}>
          <Image source={avatarSource} style={styles.avatar} />

          <View style={styles.userInfo}>
            <Text style={styles.userLabel}>Usuario</Text>
            <Text style={styles.userName}>{userFullName}</Text>

            <Text style={styles.userLabel}>Correo Institucional</Text>
            <Text style={styles.userEmail}>{userEmail}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleToggleAvatar}
          activeOpacity={0.7}
        >
          <Text style={styles.textButton}>Editar perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 6,
    marginBottom: 20,
  },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  avatar: {
    height: 96,
    width: 96,
    borderRadius: 48,
    borderWidth: 2,
    borderColor: 'tomato',
    marginRight: 16,
  },

  userInfo: {
    flex: 1,
    justifyContent: 'center',
    gap: 4,
  },

  userLabel: {
    color: 'tomato',
    fontSize: 13,
    fontWeight: '600',
  },

  userName: {
    color: '#333333',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  userEmail: {
    color: '#666666',
    fontSize: 14,
    fontWeight: '500',
  },

  button: {
    backgroundColor: 'tomato',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  textButton: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});