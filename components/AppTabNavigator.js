import React,{Component}from 'react';
import {
    Image
} from 'react-native';
import {createBottomTabNavigator}from 'react-navigation-tabs';
import DonateScreen from '../screens/bookDonateScreen';
import RequestScreen from '../screens/bookRequestScreen';

export const AppTabNavigator=createBottomTabNavigator({
    DonateBooks:{screen:DonateScreen,navigationOptions:{
        tabBarIcon:<Image source={require('../assets/request-list.png')} style={{width:20,height:20}}></Image>,
        tabBarLabel:'Donate books'
    }},
    RequestBooks:{screen:RequestScreen,navigationOptions:{
        tabBarIcon:<Image source={require('../assets/request-book.png')} style={{width:20,height:20}}></Image>,
        tabBarLabel:'Request books'
    }}
})