import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    homeContainer: {
        backgroundColor: '#00B9AE',
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
    },
    homeWrap: {
        backgroundColor: '#FAFFFF',
        height: '75%',
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
    },
    saldo: {
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    saldoText: {
        color: '#FAFFFF',
        fontFamily: 'Inter_700Bold',
        fontSize: 40,
    },
    saldoTextHidden: {
        fontFamily: 'Inter_700Bold',
        color: "#fff0",
        textShadowColor: "#05fcee",
        textShadowOffset: {
            width: -50,
            height: 0,
        },
        textShadowRadius: 1000,
        fontSize: 40,
    },
    saldoLabel: {
        color: '#FAFFFF',
        fontFamily: 'Inter_300Light',
        fontSize: 15,
        paddingBottom: 8,
    },
    saldoImg: {
        width: 25,
        height: 25,
    },
})

export default style