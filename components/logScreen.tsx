import React from 'react'
import { ScrollView, View, VStack } from 'native-base'
import LogItem from './logItem'

export type Log = {
  id: string
  subject: string
}

type Props = {
  logs: Log[]
  isEditing: boolean
  onFinishEditing: () => void
  onPress: () => void
}

export default function LogScreen(props: Props) {
  const {
    logs,
    isEditing,
    onPress,
    onFinishEditing,
  } = props

  return (
    <View>
      <ScrollView maxH="600">
        <VStack>
          {logs.map(log => (
            <LogItem
              key={log.id}
              item={log}
              subject={log.subject}
              isEditing={isEditing}
              onPress={onPress}
              onFinishEditing={onFinishEditing}
            />
          ))
          }
        </VStack>
      </ScrollView>
    </View>
  )
}

