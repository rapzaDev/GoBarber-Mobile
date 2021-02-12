import React from 'react';
import { View, Button } from 'react-native';

import { useAuth, AuthProvider } from '../../hooks/AuthContext';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
