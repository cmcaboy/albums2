import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { purple, white } from '../utils/colors';
import BlankComponent from '../components/BlankComponent';
import BlankComponent2 from '../components/BlankComponent2';
import { View, Platform, StatusBar, Text } from 'react-native';

const Tabs = TabNavigator({
     Decks: {
       screen: BlankComponent,
       navigationOptions: {
         tabBarLabel: 'Decks',
         tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
       }
     },
     NewDeck: {
       screen: BlankComponent2,
       navigationOptions: {
         tabBarLabel: 'New Deck',
         tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
       }
     }
   }, {
     navigationOptions: {
       header: null
     },
     tabBarOptions: {
       activeTintColor: Platform.OS === 'ios' ? purple : white,
       style: {
         height: 56,
         backgroundColor: Platform.OS === 'ios' ? white : purple,
         shadowColor: 'rgba(0, 0, 0, 0.24)',
         shadowOffset: {
           width: 0,
           height: 3
         },
         shadowRadius: 6,
         shadowOpacity: 1
       }
     }
   })


const MainNavigator = StackNavigator({
     Home: {
       screen: Tabs
     }
});
  
  export default MainNavigator;

  // const Tabs = TabNavigator({
  //   Decks: {
  //     screen: DeckList,
  //     navigationOptions: {
  //       tabBarLabel: 'Decks',
  //       tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
  //     }
  //   },
  //   NewDeck: {
  //     screen: NewDeck,
  //     navigationOptions: {
  //       tabBarLabel: 'New Deck',
  //       tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
  //     }
  //   }
  // }, {
  //   navigationOptions: {
  //     header: null
  //   },
  //   tabBarOptions: {
  //     activeTintColor: Platform.OS === 'ios' ? purple : white,
  //     style: {
  //       height: 56,
  //       backgroundColor: Platform.OS === 'ios' ? white : purple,
  //       shadowColor: 'rgba(0, 0, 0, 0.24)',
  //       shadowOffset: {
  //         width: 0,
  //         height: 3
  //       },
  //       shadowRadius: 6,
  //       shadowOpacity: 1
  //     }
  //   }
  // })
  
  // const MainNavigator = StackNavigator({
  //   Home: {
  //     screen: Tabs
  //   },
  //   DeckDetail: {
  //     screen: DeckDetail
  //   },
  //   NewCard: {
  //     screen: NewCard
  //   },
  //   Quiz: {
  //     screen: Quiz
  //   },
  //   QuizComplete: {
  //     screen: QuizComplete
  //   }
  // })
  