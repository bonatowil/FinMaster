import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#00B9AE',
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
    },
    scrollerWrap: {
        backgroundColor: '#FFFFF3',
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
        color: '#FFFFF3',
        fontFamily: 'Inter_700Bold',
        fontSize: 40,
    },
    saldoLabel: {
        color: '#FFFFF3',
        fontFamily: 'Inter_300Light',
        fontSize: 15,
    },
    quickAccess: {
    },
    quickAccessLabel: {
        paddingTop: 20,
        paddingLeft: 20,
        color: '#171313',
        fontFamily: 'Inter_700Bold',
        fontSize: 17,
        opacity: .75,
    },
    quickAccessButtons: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: '100%',
    },
    quickAccessButton: {
        height: 80,
        width: 80,
        marginRight: 15,
        borderRadius: 20,
        borderColor: '#171313', 
        borderWidth: 2,
    }
})

export default style