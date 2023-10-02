
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './src/views/FirstScreen';
import Screen2 from './src/views/Screen2';
import Screen3 from './src/views/Screen3';
import Screen4 from './src/views/Screen4';
import Login from './src/views/Login';
import Register from './src/views/Register';
import Login2 from './src/views/Login2';
import XMEye from './src/views/XMEye';

export default function App() {
  return (
    // <FirstScreen/>
    // <Screen2/>
    // <Screen3/>
    // <Screen4/>
    // <Login/>
    // <Register/>
    // <Login2/>
    <XMEye/>
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
