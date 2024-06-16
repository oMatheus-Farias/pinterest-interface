import { View, StyleSheet } from "react-native";
import { useState } from "react";

import { FILTERS } from "@/utils/filters";
import { POSTS } from "@/utils/posts";

import Filters from "@/components/filters";
import Posts from "@/components/posts";

import { theme } from "@/theme";

const Home = () => {
  const [filter, setFilter] = useState(FILTERS[0]);

  return (
    <View style={styles.container}>
      <Filters filters={FILTERS} filter={filter} onChange={setFilter} />
      <Posts posts={POSTS} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 54,
    backgroundColor: theme.colors.black,
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
});

export default Home;
