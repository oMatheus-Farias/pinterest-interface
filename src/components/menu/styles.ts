import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[800],
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.medium,
    flex: 1,
    textAlign: "center",
    marginRight: 24,
  },
  options: {
    flexDirection: "row",
    gap: 16,
    marginTop: 32,
  },
});
