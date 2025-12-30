import {StyleSheet,View,useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'


const themedCard = ({style,...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
  return (
    <View style={[
        {backgroundColor:theme.uiBackground},style,styles.card ]}
        {...props}/>

  )
}

export default themedCard

const styles = StyleSheet.create({
    card:{
        borderRadius:5,
        padding:20}
})