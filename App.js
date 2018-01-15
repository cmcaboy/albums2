import React from 'react';
import { View, Platform, StatusBar, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider, dispatch } from 'react-redux';
import reducer from './reducers';
import { purple, white } from './utils/colors';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/es/integration/react';
import { setLocalNotification } from './services/local_notifications';
import MainNavigator from './navigator';

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


export default class App extends React.Component {
  // Set Local notifications right here
  componentDidMount() {
    //setLocalNotification();
  }
  render() {
    return (
      // <View style={[{flex:1,justifyContent:'center',alignItems:'center'}]}>
      //   <Text>Hello World!</Text>
      // </View>
       <Provider store={store}>
         <PersistGate persistor={persistor}>       
           <View style={{flex: 1}}>
             <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
             <MainNavigator />
           </View>
         </PersistGate>
       </Provider>
    )
  }
}