import { FlatList } from "react-native";

import Filter from "@/components/filter";
import { FilterProps } from "./filters";

import { styles } from "./styles";

export default function Filters({ filters, filter, onChange }: FilterProps) {
  return (
    <FlatList
      style={styles.list}
      data={filters}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          selected={item === filter}
          onPress={() => onChange(item)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  );
}
