import { Text, View } from "react-native";
import { forwardRef } from "react";

import BottomSheet from "@gorhom/bottom-sheet";
import { MenuProps } from "./menu";
import MenuButton from "../menu-button";

import { theme } from "@/theme";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 230]}
      backgroundStyle={styles.container}
      handleComponent={() => null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome
            name="close"
            size={24}
            onPress={onClose}
            color={theme.colors.white}
          />
          <Text style={styles.title}>Comece a criar agora</Text>
        </View>

        <View style={styles.options}>
          <MenuButton title="Pin" icon="home" />
          <MenuButton title="Colagem" icon="copy" />
          <MenuButton title="Pasta" icon="folder" />
        </View>
      </View>
    </BottomSheet>
  );
});
