import { View, ActivityIndicator } from "react-native";
import { createStyles } from "../assets/styles/home.styles";
import { useTheme } from "../context/ThemeContext";
import { useMemo } from "react";

const PageLoader = () => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={theme.primary} />
    </View>
  );
};
export default PageLoader;
