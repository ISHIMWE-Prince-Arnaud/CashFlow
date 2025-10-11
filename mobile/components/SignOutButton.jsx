import React from 'react';
import { useClerk } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const SignOutButton = () => {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    try {
      await signOut();
      Linking.openURL(Linking.createURL('/'));
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <TouchableOpacity onPress={handleSignOut} style={{ padding: 8 }}>
      <Ionicons name="log-out-outline" size={24} color="#333" />
    </TouchableOpacity>
  );
};