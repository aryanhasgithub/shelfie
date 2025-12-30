import {ActivityIndicator,useColorScheme} from 'react-native'
import {Colors} from '../constants/Colors'

const Themedloader = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    
      <ActivityIndicator size="large" color={theme.text} />
    
  )
}

export default Themedloader

