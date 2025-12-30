import { StyleSheet } from 'react-native'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/Themedtext"
import ThemedView from "../../components/Themedview"
import ThemedButton from '../../components/Themedbutton'
import { useUser } from '../../hooks/useUser'

const Profile = () => {
  const { user,logout } = useUser()
  return (
    <ThemedView style={styles.container}>

      <ThemedText title={true} style={styles.heading}>
       {user.email}      
      </ThemedText>
      <Spacer />

      <ThemedText>Time to start reading some books...</ThemedText>
      <Spacer />
      <ThemedButton onPress={logout}>
        <ThemedText>Logout</ThemedText>
      </ThemedButton>

    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
})