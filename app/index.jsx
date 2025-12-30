import { StyleSheet, Text, View, Image,useColorScheme} from 'react-native'
import ThemedLogo  from '../components/Themedlogo'
import {Link} from 'expo-router'
import ThemedView from '../components/Themedview'
import Spacer from '../components/Spacer'
import ThemedText from '../components/Themedtext'
import {Colors} from '../constants/Colors'

export default function Home() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20}/>

      <ThemedText title style={styles.title}>The number 1</ThemedText> 
      <Spacer height={10}/>
      <ThemedText>
        Reading List App
      </ThemedText>
      <Spacer height={40}/>
      <Link style={[styles.link,{borderBottomColor:theme.text}]} href="/login"><ThemedText> Login Page</ThemedText></Link>
      <Spacer height={20}/>
      <Link style={[styles.link,{borderBottomColor:theme.text}]} href="/register"><ThemedText> Register Page</ThemedText></Link>
      <Spacer height={20}/>
      <Link style={[styles.link,{borderBottomColor:theme.text}]} href="/profile"><ThemedText> Profile Page</ThemedText></Link>


    </ThemedView>
    

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full screen
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  link:{
    borderBottomWidth: 1
  }
})