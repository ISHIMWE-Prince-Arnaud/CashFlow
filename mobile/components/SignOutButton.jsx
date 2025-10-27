import { useClerk } from "@clerk/clerk-expo";
import { Alert, TouchableOpacity } from "react-native";
import { createStyles } from "../assets/styles/home.styles";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";
import { useMemo } from "react";

export const SignOutButton = () => {
  // Use `useClerk()` to access the `signOut()` function
  const { signOut } = useClerk();
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const handleSignOut = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive", onPress: signOut },
    ]);
  };

  return (
    <TouchableOpacity
      style={[styles.logoutButton, { backgroundColor: theme.card }]}
      onPress={handleSignOut}>
      <Ionicons name="log-out-outline" size={22} color={theme.text} />
    </TouchableOpacity>
  );
};
