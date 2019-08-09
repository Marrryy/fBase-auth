import React from 'react';
import { StyleSheet,  View } from 'react-native';
import SignUpForm from './components/signUpForm';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUpForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
