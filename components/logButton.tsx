import React from 'react'
import { Center, HStack, Button } from 'native-base'

type Props = {
  addLog: (arg: string) => void
}

export default function LogButton(props: Props) {
  const { addLog } = props
  return (
    <Center>
      <HStack space={2}>
        <Button
          onPress={() => addLog('うんこ')}
          colorScheme="amber">
          うんこ
        </Button>
        <Button
          onPress={() => addLog('おしっこ')}
          colorScheme="danger">
          おしっこ
        </Button>
        <Button
          onPress={() => addLog('利尿剤')}
          colorScheme="tertiary">
          利尿剤
        </Button>
      </HStack>
    </Center>
  )
}

