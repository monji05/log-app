import React, { useState } from 'react'
import shortid from 'shortid'
import { View, VStack, ScrollView } from 'native-base'
import LogScreen, { Log } from '../components/logScreen'
import LogButton from '../components/logButton'

export default function MainScreen() {

  const [logs, setLogs] = useState<Array<Log>>([])
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDay()
  const hours = date.getHours()
  const time = date.getMinutes()

  const addLog = (arg: string) => {
    const newLog = {
      id: shortid.generate(),
      subject: `[${year}-${month}-${day} ${hours}:${time}] ${arg}`,
    }
    setLogs([newLog, ...logs])
  }

  return (
    <View>
      <ScrollView maxH="600" w="300">
        <VStack>
          <LogScreen
            logs={logs}
          />
        </VStack>
      </ScrollView>
      <LogButton
        addLog={addLog}
      />
    </View>
  )
}
