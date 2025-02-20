import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native'
import estilo from './Estilo';

export default function Somar() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    return (
        <View>
            <TextInput 
                placeholder="Digite o primeiro Valor"
                keyboardType="numeric"
                value={num1}
                onChangeText={setNum1}
                style={estilo.input}
            />
            <TextInput 
                placeholder="Digite o segundo Valor"
                keyboardType="numeric"
                value={num2}
                onChangeText={setNum2}
                style={estilo.input}
            />
            <Text style={estilo.textResultado}>Resultado: {parseInt(num1)+parseInt(num2)}</Text>
        </View>
    )
}
