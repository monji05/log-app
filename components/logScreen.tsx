import * as React from 'react'
import {Button, HStack, Center, VStack, Text } from 'native-base'
import { nanoid } from "nanoid"
import { StyleSheet } from 'react-native'

type Log = {
  text: string
}

export default function LogScreen() {
  const [logs, setLogs] = React.useState<Array<Log>>([])

  function addLog(arg: string) {
    const newLogText = {
      text: `[${new Date().toLocaleString()}] ${arg}`
    }
    setLogs([...logs, newLogText])
  }

  const text = logs.map((log) => {
    return (
      <VStack key={nanoid()}>
        <Text>{log.text}</Text>
      </VStack>
    )
  })

  return (
    <div>
      {text}
      <Center>
        <HStack space={2}>
          <Button onPress={() => addLog('うんこ')} colorScheme="amber">うんこ</Button>
          <Button onPress={() => addLog('おしっこ')} colorScheme="danger">おしっこ</Button>
          <Button onPress={() => addLog('利尿剤')} colorScheme="tertiary">利尿剤</Button>
        </HStack>
      </Center>
    </div>
  )
}

