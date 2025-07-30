import { api } from "@/convex/_generated/api";
// import { addTodos } from "@/convex/todos";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Index() {
  const todos  = useQuery(api.todos.getTodos);
  console.log(todos)
  const {toggleDarkMode} = useTheme(); 

  const  addTodo = useMutation(api.todos.addTodos)
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
      <TouchableOpacity 
      onPress={() => addTodo({
        text: "Walk the dog"
      })}>
        <Text>Add a new Todo</Text>
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