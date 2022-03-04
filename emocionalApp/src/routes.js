import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Login from './screens/Login';
import Home from './screens/Home';
import Details from './screens/Details';
import AddStatus from './screens/AddStatus';
import Profile from './screens/Profile';

const styles = StyleSheet.create({
    plusIcon: {
        backgroundColor: 'blue',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    generalIcons: {
        width: 48,
        height: 40,
        backgroundColor: '#304FFE1A',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12
    },
})

const StackNavegation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
                <Stack.Screen options={{ headerShown: false }} name='Home' component={MyTabs} />
                <Stack.Screen options={{ headerShown: false }} name='Details' component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const MyTabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                activeTintColor: '#000',
                activeBackgroundColor: 'blue',
                tabStyle: {
                    backgroundColor: '#fff',
                    height: 90,
                    marginTop: -40,
                    borderTopWidth: 2,
                    borderColor: '#C4C4C4',
                },
            }}
        >
            <Tab.Screen 
                options={{headerShown: false}} 
                name='Home' 
                component={Home} 
                options={{ 
                    headerShown: false,
                    tabBarIcon: () => (
                        <View style={[styles.generalIcons ]} >
                            <Icon name='home' size={25} color={'#304FFE'} />
                        </View>
                    ),
                }}       
            />
            <Tab.Screen
                name='Add'
                component={AddStatus}
                options={() => ({
                    headerShown: false,
                    tabBarStyle: {display: 'none'},
                    tabBarIcon: () => (
                        <View style={styles.plusIcon}>
                            <Icon name='plus' size={50} color={'#fff'} />
                        </View>
                    )
                })}
            />
            <Tab.Screen 
                options={{headerShown: false}}
                name='Profile'
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <View style={styles.generalIcons} >
                            <Icon name='list' size={25} color={'#304FFE'} />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default StackNavegation;