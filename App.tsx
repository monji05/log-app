import * as React from 'react'
import { View } from 'react-native'
import { Center } from 'native-base'
import AppContainer from './screen/app-container'
import ThemeToggle from './components/theme-toggle'
import MainScreen from './screen/main'

export default function App() {
  return (
    <AppContainer>
      <Center _light={{ bg: "blueGray.50" }} _dark={{ bg: "blueGray.900" }} px={5} flex={1}>
        <View>
          <MainScreen />
          <ThemeToggle />
        </View>
      </Center>
    </AppContainer>
  );
}

