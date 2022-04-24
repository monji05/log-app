import React, { useState } from 'react'
import { ScrollView, View, VStack } from 'native-base'
import LogItem from './logItem'

export type Log = {
  id: string
  subject: string
}

type Props = {
  logs: Log[]
}

export default function LogScreen(props: Props) {
  const {
    logs,
  } = props

  const [editingItemId, setEditingItemId] = useState("")

  return (
    <View>
      <ScrollView maxH="600">
        <VStack>
          {logs.map(log => (
            <LogItem
              key={log.id}
              isEditing={log.id === editingItemId}
              onPress={() => setEditingItemId(log.id)}
              onBlur={() => setEditingItemId("")}
              item={log}
              subject={log.subject}
            />
          ))
          }
        </VStack>
      </ScrollView>
    </View>
  )
}

