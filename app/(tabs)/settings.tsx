import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import useTheme from '@/hooks/useTheme'
import { createSettingsStyles } from '@/assets/styles/settings.styles'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import ProgressStats from '@/components/ProgressStats'

const SettingsScreen= () => {
  const [isAutoSync, setIsAutoSync] = useState(true)
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true)
  const {colors, isDarkMode, toggleDarkMode}  = useTheme()
  const settingsStyles = createSettingsStyles(colors)
  return (
    <LinearGradient colors={colors.gradients.background} style = {settingsStyles.container}>
      <SafeAreaView style = {settingsStyles.safeArea}>
        <View style={settingsStyles.header}>
          <View style={settingsStyles.titleContainer}>
            <LinearGradient colors={colors.gradients.primary} style={settingsStyles.iconContainer}>
              <Ionicons name="settings" size={28} color="#ffffff" />
            </LinearGradient>
            <Text style={settingsStyles.title}>Settings</Text>
          </View>
        </View>
        <ScrollView
        style ={settingsStyles.scrollView}
        contentContainerStyle = {settingsStyles.content}
        showsVerticalScrollIndicator = {false}
        >
          <ProgressStats />

        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default SettingsScreen
