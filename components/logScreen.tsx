import * as React from 'react'
import {Button, HStack, Center, VStack, Text } from 'native-base'
import {Log} from './log-button'

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
      <VStack>
        <Text>{log.text}</Text>
      </VStack>
    )
  })

  return (
    <Center>
      {text}
      <HStack space={2}>
        <Button onPress={() => addLog('うんこ')}>うんこ</Button>
        <Button onPress={() => addLog('おしっこ')}>おしっこ</Button>
        <Button onPress={() => addLog('利尿剤')}>利尿剤</Button>
      </HStack>
    </Center>
  )
}
