import React, { useCallback } from 'react'
import { View, Pressable, Text, Input } from 'native-base'
import shortid from 'shortid'
import { Log } from './logScreen'

type Props = {
  item: Log
  subject: string
  onPress: () => void
  onFinishEditing: () => void
  isEditing: boolean
}

export default function LogItem(props: Props) {
  const {
    item,
    subject,
    onPress,
    onFinishEditing,
    isEditing,
  } = props

  return (
    <View>
      {
        isEditing ? (
          <Pressable onPress={onFinishEditing}>
            <Input
              value={subject}
              blur={onFinishEditing}
              variant="unstyled"
              px={1}
              py={0}
              autoFocus
              onblur={onFinishEditing}
            />
          </Pressable>
        ) : (
          <Pressable onPress={onPress}>
            <Text>{subject}</Text>
          </Pressable>
        )
      }
    </View>
  )
}

