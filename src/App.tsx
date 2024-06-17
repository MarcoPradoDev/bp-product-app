// In App.js in a new project
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './ui/routes/MainStack';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default App;