import { useState } from "react"
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  Button 
} from "react-native"

import { apiServices } from "../services/api"

export const UserForm = ({ triggerLoadUsers }) => {
  const [form, setForm] = useState({
    name: '',
    email: ''
  })

  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleCreateUser = async () => {
    setNameError('')
    setEmailError('')

    if (anyError()) return

    await apiServices.createUser({
      name: form.name,
      email: form.email
    })

    triggerLoadUsers()
  }

  const anyError = () => {
    let hasError = false

    if (!form.name) {
      setNameError('Nome é obrigatório')
      hasError = true
    }

    if (!form.email) {
      setEmailError('Email é obrigatório')
      hasError = true
    }
    
    return hasError
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>

      <View>
        <Text style={styles.label}>Nome</Text>
        <TextInput 
          style={styles.input} 
          value={form.name}
          onChangeText={newText => {
            setForm(prev => ({
              ...prev,
              name: newText
            }))
          }}
        />
        {nameError && <Text style={{ color: 'red' }}>{nameError || ''}</Text>}

        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input}
          value={form.email}
          onChangeText={newText => {
            setForm(prev => ({
              ...prev,
              email: newText
            }))
          }}
        />
        {emailError && <Text style={{ color: 'red' }}>{emailError || ''}</Text>}
      </View>

      <View style={styles.buttonView}>
        <Button
          onPress={() => handleCreateUser()}
          title="Cadastrar"
          accessibilityLabel="Submit user"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    maxHeight: '30%',
    flex: 1,
    height: 90,
    marginTop: 50,
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  label: {
    fontWeight: 'bold',
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
