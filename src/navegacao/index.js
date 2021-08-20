import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
//import Stack from './Stack'
import Tab from './Tab'
//import Drawer from './Drawer'

export default props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* Necessário colocar a navegação dentro do container */}
            <NavigationContainer>
                {/* <Stack /> */}
                <Tab />
                {/* <Drawer /> */}
            </NavigationContainer>
        </SafeAreaView>
    )
}