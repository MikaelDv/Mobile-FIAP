import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    textoPadrao: {
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold'
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: 160,
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        marginBottom: 10
    },
    textResultado: {
        fontSize: 20,
        color: 'blue'
    }
});