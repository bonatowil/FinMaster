import { StyleSheet } from "react-native";

const style = StyleSheet.create({
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