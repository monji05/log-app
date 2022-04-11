import * as React from 'react'
import {NativeBaseProvider} from 'native-base'
import theme from '../theme'
import { NavigationContainer } from '@react-navigation/native'

type Props = {
  children: React.ReactNode
}

export default function AppContainer(props: Props) {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>{props.children}</NativeBaseProvider>
    </NavigationContainer>
  )
}
