import React, { useCallback, useState } from 'react'
import { View, Pressable, Text, Input } from 'native-base'
import { Log } from './logScreen'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

type Props = {
  item: Log
  subject: string
  isEditing: boolean
  onPress: () => void
  onBlur: () => void
}

export default function LogItem(props: Props) {
  const {
    item,
    isEditing,
    onPress,
    onBlur,
  } = props

  const [subject, setSubject] = useState(item.subject)

  const onChangeSubject = useCallback((e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setSubject(e.nativeEvent.text)
  }, [])

  return (
    <View>
      {
        isEditing ?
          <Input
            value={subject}
            variant="underlined"
            fontSize={13}
            px={1}
            py={0}
            onChange={onChangeSubject}
            onBlur={onBlur}
          />
          :
          <Pressable onPress={onPress}>
            <Text
              px={1}
              py={0}
            >{subject}
            </Text>
          </Pressable>
      }
    </View >
  )
}

