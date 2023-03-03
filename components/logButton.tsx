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
          backgroundColor="amber.900">
          うんこ
        </Button>
        <Button
          onPress={() => addLog('おしっこ')}
          backgroundColor="amber.500">
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

