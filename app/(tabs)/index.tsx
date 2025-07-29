import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style = {styles.content}>Edit apps/index.tsx to edit this screen11.</Text>
      <Text>Hi</Text>
    </View>
  );
}

const styles =  StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  content : {
    fontSize: 22,
  }
})