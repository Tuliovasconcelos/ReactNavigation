import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'
const Stack = createNativeStackNavigator()

export default props => {
    return (
        //Colocar qual será a tela inicial padrão e ocultado ou não o titulo padrão
        <Stack.Navigator initialRouteName="TelaA" screenOptions={{ headerShown: true }}>
            {/* Dentro do stackNavigator vai conter as telas "StackScreens" */}
            <Stack.Screen name="TelaA"
                options={{ title: 'Informações Iniciais' }}>
                {props => (
                    // informa qual tela o botão avancar vai mandar
                    <PassoStack {...props} avancar="TelaB" >
                        {/* Mostra a tela que vai aparecer */}
                        <TelaA />
                    </PassoStack>
                )}
            </Stack.Screen>
            <Stack.Screen name="TelaB"
                options={{ title: 'Segundas Informações' }}>
                {props => (
                    // informa qual tela o botão avancar vai mandar
                    <PassoStack {...props} avancar="TelaC" voltar >
                        {/* Mostra a tela que vai aparecer */}
                        <TelaB />
                    </PassoStack>
                )}
            </Stack.Screen>
            <Stack.Screen name="TelaC"
                options={{ title: 'Segundas Informações' }}>
                {props => (
                    // informa qual tela o botão avancar vai mandar
                    <PassoStack {...props} avancar="TelaC" voltar >
                        {/* Mostra a tela que vai aparecer */}
                        <TelaC />
                    </PassoStack>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    )
}