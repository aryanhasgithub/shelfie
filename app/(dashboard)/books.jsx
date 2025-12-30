import {StyleSheet,FlatList, Pressable } from 'react-native'
import { useBooks } from '../../hooks/useBooks'
import {Colors} from '../../constants/Colors'
import Themedcard from '../../components/Themedcard'
import Spacer from "../../components/Spacer"
import ThemedText from "../../components/Themedtext"
import {useRouter} from 'expo-router'
import ThemedView from "../../components/Themedview"


const Books = () => {
  const {books}= useBooks()
  const router = useRouter()

  return (
    <ThemedView style={styles.container} safe={true}>

      <Spacer />
      <ThemedText title={true} style={styles.heading}>
        Your Reading List
      </ThemedText>
      <Spacer/>
      <FlatList
        data={books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <Pressable onPress={()=>router.push(`/books/${item.$id}`)}>
          <Themedcard style={styles.card}
          ><ThemedText>{item.title}</ThemedText>
          <ThemedText>Written By: {item.author}</ThemedText> 
          </Themedcard>
        </Pressable>}/>

    </ThemedView>
  )
}

export default Books

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  list: {
    marginTop:40
  },
  card: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 10,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4
  },
  
})