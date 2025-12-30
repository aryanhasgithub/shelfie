import { StyleSheet,Text} from 'react-native'
import { useEffect,useState } from 'react'
import { useBooks } from '../../../hooks/useBooks'
import {Colors} from '../../../constants/Colors'
import Spacer from "../../../components/Spacer"
import ThemedText from "../../../components/Themedtext"
import ThemedView from "../../../components/Themedview"
import ThemedButton from '../../../components/Themedbutton'
import { useRouter, useLocalSearchParams } from "expo-router"
import ThemedLoader from '../../../components/Themedloader'
import ThemedCard from '../../../components/Themedcard'

const BookDetails = () => {
  const [book, setBook] = useState(null)

  const { id } = useLocalSearchParams()
  const { fetchBookById, deleteBook } = useBooks()
  const router = useRouter()

  const handleDelete = async () => {
    await deleteBook(id)
    setBook(null)
    router.replace('../books')
  }

  useEffect(() => {
    async function loadBook() {
      const bookData = await fetchBookById(id)
      setBook(bookData)
    }

    loadBook()

    return () => setBook(null)
  }, [id])

  if (!book) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    )
  }

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>
        <ThemedText>Written by {book.author}</ThemedText>
        <Spacer />

        <ThemedText title={true}>Book description:</ThemedText>
        <Spacer height={10} />

        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>

      <ThemedButton onPress={handleDelete} style={styles.delete}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Delete Book</Text>
      </ThemedButton>
    </ThemedView>
  )
}

export default BookDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20
  },
  delete: {
    marginTop: 40,
    backgroundColor: Colors.warning,
    width: 200,
    alignSelf: "center",
  },
})