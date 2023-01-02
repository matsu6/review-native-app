import { useState, useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { collection, getDocs } from "firebase/firestore"
import { db } from "./firebaseConfig"
import { Shop } from "./src/types/shop"
export default function App() {
  const [shops, setShops] = useState<Array<Shop>>([])
  const title = "Hello World!"

  const getFirebaseItems = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "shops"))
      const shops = querySnapshot.docs.map((doc) => doc.data() as Shop)
      setShops(shops)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getFirebaseItems()
  }, [])

  const shopItems = shops.map((shop, index) => (
    <Text key={index}>{shop.name}</Text>
  ))

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      {shopItems}
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
