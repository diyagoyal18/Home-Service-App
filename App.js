import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';

export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_b2JsaWdpbmctZ3VsbC00My5jbGVyay5hY2NvdW50cy5kZXYk'>
    <View style={styles.container}>
      <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
      <Login/>
        </SignedOut>
      <StatusBar style="auto" />
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20
  },
});


//to run use npm run start
