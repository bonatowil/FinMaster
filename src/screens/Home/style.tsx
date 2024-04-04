import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      },
    homeContainer: {
        backgroundColor: '#00B9AE',
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
    },
    homeWrap: {
        backgroundColor: '#FAFFFF',
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        flex: 1,
    },
    saldo: {
        marginTop: 15,
        width: '100%',
        height: '20%',
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
    quickAccess: {
        backgroundColor: '#FAFFFF',
        borderRadius: 40,
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.35,
        shadowRadius: 5,
        elevation: 10,
    }
})

export default style