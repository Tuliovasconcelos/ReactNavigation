import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

export default props => {
    return (
        <Tab.Navigator

            //icones no tabNavigator(Verifica se está selecionado "Focused")
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case "TelaA":
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                            break;
                        case "TelaB":
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                            break;
                        case "TelaC":
                            iconName = focused
                                ? 'ios-list-box'
                                : 'ios-list';
                            break;
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })}

            tabBarOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'blue',
                showLabel: true,
                //labelStyle: { fontSize: 30 }
                //Colocar qual será a tela inicial padrão e ocultado ou não o titulo padrão
            }}

            initialRouteName="TelaB" >

            {/* Dentro do TabNavigator vai conter as telas "TabScreens" */}
            <Tab.Screen name="TelaA" component={TelaA} options={{ title: "Inicial" }} />
            <Tab.Screen name="TelaB" component={TelaB} options={{ title: "Meio" }} />
            <Tab.Screen name="TelaC" component={TelaC} options={{ title: "Final" }} />
        </Tab.Navigator >
    )
}