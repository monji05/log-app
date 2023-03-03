import * as React from 'react'
import { Text, Switch, HStack, useColorMode, Center, MoonIcon, SunIcon } from 'native-base'

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Center py={2}>
      <HStack space={1} alignItems="center">
        <MoonIcon size={5} color='coolGray.500' />
        <Switch
          isChecked={colorMode === 'light'}
          onToggle={toggleColorMode}
        ></Switch>
        <SunIcon size={5} color='yellow.500' />
      </HStack>
    </Center>
  )
}
