import { theme } from "@/theme";
import { View, Text, StyleSheet } from "react-native";

const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>search page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.black,
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
});

export default Search;
