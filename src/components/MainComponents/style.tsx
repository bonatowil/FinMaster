import { StyleSheet } from "react-native";

const style = StyleSheet.create({
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
    dateTransactions: {},
    singleTransaction: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    imageTransactionBorder: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
    },
    imageTransaction: {
        height: 30,
        width: 30,
    },
    typeTransaction: {
        fontFamily: 'Inter_700Bold',
        opacity: 0.6,
        fontSize: 16,
    },
    descTransaction: {
        fontFamily: 'Inter_400Regular',
    },
    valueTransaction: {
        fontFamily: 'Inter_900Black',
        flex: 1,
        textAlign: 'right',
        opacity: 0.9,
    },
})

export default style