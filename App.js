import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import * as LocalAuthentication from 'expo-local-authentication';
import AppScreen from './src/Navigation/screens/AppScreen';

export default function App() {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    // Check if hardware supports biometrics
    useEffect(() => {
      (async () => {
        const compatible = await LocalAuthentication.hasHardwareAsync();
        setIsBiometricSupported(compatible);
      })();
    });

    function onAuthenticate () {
      const auth = LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate',
        fallbackLabel: 'Enter Password',
      });
      auth.then(result => {
        setIsAuthenticated(result.success);
          console.log(result);
      }
      );
    }

  return (
    <View style={styles.container}>
      { isAuthenticated 
        ? <HomeScreen setIsAuthenticated={setIsAuthenticated} /> || <AppScreen setIsAuthenticated={setIsAuthenticated} />
        : <Auth onAuthenticate={onAuthenticate} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
