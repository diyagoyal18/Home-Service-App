import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import * as React from 'react'
import Colors from '../../Utils/Colors'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
import { useOAuth } from "@clerk/clerk-expo";
import google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{alignItems:'center'}}>
     <Image source={require("./../../../assets/Images/login.png")}
     style={styles.loginImage}
     />
    <View style={styles.subContainer}>
      <Text style={{fontSize:27, color:Colors.WHITE, textAlign:'center'}}>
         Let's Find   
        <Text style={{fontWeight:'bold'}}> Proffesional Cleaning and repair  
        </Text> Service.
      </Text>
      <Text style={{fontSize:15, textAlign:'center', color:Colors.WHITE, marginTop:20}}>Best App to Find services near you.</Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{textAlign:'center', fontSize:17,color:Colors.PRIMARY}}>Lest's Get it started</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  loginImage:{
    width:230,
    height:450,
    marginTop:70,
    borderWidth:4,
    borderColor:Colors.BLACK,
    borderRadius:15
  },
  subContainer:{
    width:'100%',
    backgroundColor:Colors.PRIMARY,
    height:'70%',
    marginTop:-20,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:10
  }, 
  button:{
    padding:15,
    backgroundColor: Colors.WHITE,
    borderRadius:99,
    marginTop:40
  }
})




//rnf is for code snippet