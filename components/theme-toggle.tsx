import * as React from 'react'
import { Text, Switch, HStack, useColorMode, Center } from 'native-base'

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Center>
      <HStack space={2} alignItems="center">
        <Text>Dark</Text>
        <Switch
          isChecked={colorMode === 'light'}
          onToggle={toggleColorMode}
        ></Switch>
        <Text>Light</Text>
      </HStack>
    </Center>
  )
}
