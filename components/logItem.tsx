import React, { useCallback, useState } from 'react'
import { View, Pressable, Text, Input } from 'native-base'
import { Log } from './logScreen'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

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
    onPress,
    onFinishEditing,
    isEditing,
  } = props

  const [subject, setSubject] = useState(item.subject)

  const onChangeSubject = useCallback((e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setSubject(e.nativeEvent.text)
  }, [])

  return (
    <View>
      {
        isEditing ? (
          <Input
            value={subject}
            variant="unstyled"
            fontSize={14}
            px={1}
            py={0}
            autoFocus
            onblur={onFinishEditing}
            onChange={onChangeSubject}
          />
        ) : (
          <Pressable onPress={onPress}>
            <Text
              px={1}
              py={0}
            >{subject}
            </Text>
          </Pressable>
        )
      }
    </View>
  )
}

