import * as React from 'react'
import { Button, HStack, Center, VStack, Text } from 'native-base'
import LogScreen from './logScreen'

export type Log = {
  text: string
}

export default function LogButton() {
  return (
    <HStack space={2}>
      <Button onPress={() => addLog('うんこ')}>うんこ</Button>
      <Button onPress={() => addLog('おしっこ')}>おしっこ</Button>
      <Button onPress={() => addLog('利尿剤')}>利尿剤</Button>
    </HStack>
  )
}
