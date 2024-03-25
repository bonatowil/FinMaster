import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#00B9AE',
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
    },
    mainWrap: {
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
        color: '#FFFFF3',
        fontFamily: 'Inter_300Light',
        fontSize: 15,
        paddingBottom: 8,
    },
    saldoImg: {
        width: 25,
        height: 25,
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
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: '100%',
        justifyContent: 'space-between',
    },
    quickAccessButton: {
        height: 75,
        width: 75,
        borderRadius: 20,
        borderColor: '#171313', 
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    quickAccessImage: {
        height: '50%',
        width: '50%',
    },
    quickAccessText: {
        color: '#171313',
        fontFamily: 'Inter_700Bold',
        opacity: 0.75,
        fontSize: 13, 
    },
    separator: {
        marginVertical: 15,
        width: '80%',
        alignSelf: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,    
    },
    transactions: {
        paddingHorizontal: 20,
        flexGrow: 1,
        flex: 1,
        paddingBottom: 450,
    },
    textDate: {
        marginBottom: 15,
        fontFamily: 'Inter_900Black',
        color: '#171313',
        opacity: 0.9,
    },
})

export default style