import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Index() {
  const todos  = useQuery(api.todos.getTodos);
  console.log(todos)
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