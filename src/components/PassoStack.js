import React from 'react'
import { Button, View } from 'react-native'

export default props => {

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                flexDirection: 'row',
                padding: 20,
                justifyContent: 'space-around',
                alignItems: ' center'
            }}>
                {/* Se vier a propriedade avancar , vai renderizar um botao com onPress mandando para a tela  */}
                {props.avancar ? <Button
                    title="Avançar"
                    onPress={() => {
                        props.navigation.push(props.avancar, {
                            numero: parseInt(Math.random() * 100)
                        })
                    }}
                /> : false}
                {/* Se vier a propriedade voltar , vai renderizar um botao com onPress mandando para a tela  */}
                {props.voltar ? <Button
                    title="Voltar"
                    onPress={() => { props.navigation.goBack() }}
                /> : false}
            </View>
            <View style={{ flex: 1 }}>
                {props.children}
            </View>
        </View>
    )
}