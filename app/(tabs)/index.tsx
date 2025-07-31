import { api } from "@/convex/_generated/api";
// import { addTodos } from "@/convex/todos";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme(); // ✅ get colors first
  const styles = createStyles(colors);           // ✅ pass colors properly

  return (
    <View style={styles.container}>
      <Text style={styles.content}>Edit apps/index.tsx to edit this screen.</Text>
      <Text>Hi</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

// ✅ Properly typed parameter and function
const createStyles = (colors: ColorScheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      backgroundColor: colors.bg, // assuming background exists
    },
    content: {
      fontSize: 22,
      color: colors.text, // assuming text color exists
    },
  });
