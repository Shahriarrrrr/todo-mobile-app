import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
// import { addTodos } from "@/convex/todos";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";


export default function Index() {
  const { toggleDarkMode, colors } = useTheme(); // ✅ get colors first
  const homeStyles = createHomeStyles(colors);          // ✅ pass colors properly

  return (
    <LinearGradient colors ={colors.gradients.background} style={homeStyles.container}>
    <StatusBar barStyle={colors.statusBarStyle}></StatusBar>
    <SafeAreaView  style={homeStyles.container}>
      <Header></Header>
      <TodoInput/>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle Mode</Text>
      </TouchableOpacity>
    </SafeAreaView>
    </LinearGradient>
    
  );
}

