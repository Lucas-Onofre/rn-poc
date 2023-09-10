// import { useState } from "react"
import { FlatList } from "react-native"
import { StyleSheet, View, Text } from "react-native"

export const ListUsers = ({ users }) => {
  console.log(users)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuários</Text>

      <FlatList 
        data={users}
        renderItem={({ item }) => {
          return (
            <View style={{
              marginBottom: 20
            }}>
              <Text style={styles.text}>Nome: {item.name}</Text>
              <Text style={styles.text}>Email: {item.email}</Text>
            </View>
          )
        }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '70%',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  text: {
    fontSize: 20
  },
  input: {
    marginBottom: 10,
    height: 40,
    borderWidth: 1,
    padding: 10
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
})