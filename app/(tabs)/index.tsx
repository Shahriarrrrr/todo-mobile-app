import { Link } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import useTheme from "@/hooks/useTheme";
export default function Index() {
  const {toggleDarkMode} = useTheme(); 
  return (
    <View
      style={styles.container}
    >
      <Text style = {styles.content}>Edit apps/index.tsx to edit this screen11.</Text>
      <Text>Hi</Text>
      <TouchableOpacity
      onPress={toggleDarkMode}
      >
        <Text>Toggle Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles =  StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  content : {
    fontSize: 22,
  }
})