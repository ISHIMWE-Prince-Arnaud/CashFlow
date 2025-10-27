import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { THEMES } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

export const ThemeSelector = () => {
  const { theme, themeName, changeTheme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.text }]}>Theme</Text>
      <View style={styles.themeGrid}>
        {Object.entries(THEMES).map(([name, themeColors]) => (
          <TouchableOpacity
            key={name}
            style={[
              styles.themeButton,
              { backgroundColor: themeColors.primary },
              name === themeName && styles.selectedTheme,
            ]}
            onPress={() => changeTheme(name)}>
            {name === themeName && (
              <Ionicons name="checkmark-circle" size={20} color="#FFF" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  themeGrid: {
    flexDirection: "row",
    gap: 12,
  },
  themeButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedTheme: {
    borderWidth: 2,
    borderColor: "#FFF",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
