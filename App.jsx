import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { UserForm } from './src/components/user-form';
import { ListUsers } from './src/components/list-users';

import { apiServices } from './src/services/api';

export default function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    handleGetUsers()
  }, [])

  const handleGetUsers = async () => {
    const response = await apiServices.getUsers()

    setUsers(response)
  }

  return (
    <View style={{
      flex: 1,
      padding: 20,
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <UserForm 
        triggerLoadUsers={handleGetUsers}
        style={{
        flex: 1,
      }}/>
      <ListUsers 
        users={users} 
        style={{
          innerHeight: 1000
      }}/>
    </View>
  )
}
