import { useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import screens
import LandingScreen from './src/screens/LandingScreen';
import DevicesScreen from './src/screens/DevicesScreen';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen name='Landing' component={LandingScreen} options={{title: 'BluetoothFinder'}}/>
        <Stack.Screen name='Devices' component={DevicesScreen} options={{title: 'Geräte'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;