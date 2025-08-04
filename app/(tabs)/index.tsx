import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
// import { addTodos } from "@/convex/todos";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { Alert, FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { Ionicons } from "@expo/vector-icons";

type Todo = Doc<"todos">

export default function Index() {
  const { toggleDarkMode, colors } = useTheme(); // ✅ get colors first
  const homeStyles = createHomeStyles(colors);          // ✅ pass colors properly
  const todos = useQuery(api.todos.getTodos);
  const toggleTodo = useMutation(api.todos.toggleTodos)

  const isLoading = todos === undefined

  if(isLoading) return <LoadingSpinner></LoadingSpinner>
  const handleToggleTodo = async (id: Id<"todos">) => {
    try {
      await toggleTodo({id})
    }catch(error){
      console.log("Error toggling TODO", error);
      Alert.alert("Error", "Failed to toggle todo");
    }
  }
  const renderTodoItem = ({item} : {item : Todo}) => {
    return (
      <View style={homeStyles.todoItemWrapper}>
        <LinearGradient 
        colors={colors.gradients.surface}
        style={homeStyles.todoItem}
        start={{x: 0 , y: 0}}
        end={{x:1, y:1}}
        >
          <TouchableOpacity
          style={homeStyles.checkbox}
          activeOpacity={0.7}
          onPress={() => handleToggleTodo(item._id)}
          >
            <LinearGradient
            colors={item.isCompleted ? colors.gradients.success : colors.gradients.muted}
            style={
              [
                homeStyles.checkboxInner,
                {
                  borderColor: item.isCompleted ? "transparent" : colors.border
                }
              ]
            }
            >
              {
                item.isCompleted && <Ionicons name="checkmark" size={18} color={"#fff"} />
              }
            </LinearGradient>
          </TouchableOpacity>
          <View style= {homeStyles.todoTextContainer}>
            <Text
            style = {[
              homeStyles.todoText,
              item.isCompleted && {
                textDecorationLine: "line-through",
                color: colors.textMuted,
                opacity: 0.6,
              }
            ]}
            >
              {item.text}
            </Text>
          </View>
        </LinearGradient>
      </View>
    )
  }


  return (
    <LinearGradient colors ={colors.gradients.background} style={homeStyles.container}>
    <StatusBar barStyle={colors.statusBarStyle}></StatusBar>
    <SafeAreaView  style={homeStyles.container}>
      <Header></Header>
      <TodoInput/>
      <FlatList
      data={todos}
      keyExtractor={(item) => item._id}
      renderItem={renderTodoItem}
      style= {homeStyles.todoList}
      contentContainerStyle={homeStyles.todoListContent}
      >

      </FlatList>
      {/* <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle Mode</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
    </LinearGradient>
    
  );
}

