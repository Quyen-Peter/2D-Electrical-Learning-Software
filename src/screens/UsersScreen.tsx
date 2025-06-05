
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getUsers } from '../services/api';

type User = {
  id: number;
  fullName: string;
  email: string;
  role: string;
  createdAt: string;
};

const UsersScreen = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Danh sách người dùng</Text>
      {users.map(user => (
        <View key={user.id} style={styles.card}>
          <Text style={styles.name}>• {user.fullName} - {user.id}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Vai trò: {user.role}</Text>
          <Text>Ngày tạo: {user.createdAt}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 14,
    borderRadius: 10,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
});
