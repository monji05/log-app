import * as React from 'react'
import { View } from 'react-native'
import { Center } from 'native-base'
import AppContainer from './screen/app-container'
import ThemeToggle from './components/theme-toggle'
import LogScreen from './components/logScreen'

export default function App() {
  return (
    <AppContainer>
      <Center _light={{ bg: "blueGray.50" }} _dark={{ bg: "blueGray.900" }} px={5} flex={1}>
        <View>
          <LogScreen/>
          <ThemeToggle/>
        </View>
      </Center>
    </AppContainer>
  );
}

