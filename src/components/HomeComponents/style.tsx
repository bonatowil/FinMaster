import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    profileImageButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        padding: 5,
        borderRadius: 12,
        borderWidth: .5,
        borderColor: '#171313'
    },
    profileImage: {
        height: 36,
        width: 36,
    },
    profileName: {
        fontFamily: 'Inter_700Bold',
        color: '#FAFFFF',
    },
    configImage: {
        height: 32,
        width: 32,   
    },
    quickAccessLabel: {
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
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 15,
    },
    quickAccessImage: {
        // resizeMode: 'center',
        height: '40%',
        width: '40%',
    },
    quickAccessText: {
        color: '#171313',
        fontFamily: 'Inter_700Bold',
        opacity: 0.75,
        fontSize: 13, 
    },
    transactions: {
        paddingHorizontal: 20,
    },
    transactionLabel: {
        color: '#171313',
        paddingVertical:12,
        textAlign: 'center',
        fontFamily: 'Inter_700Bold',
        opacity: 0.75,
        fontSize: 18,
    },
    textDate: {
        marginBottom: 15,
        fontFamily: 'Inter_900Black',
        color: '#171313',
        opacity: 0.9,
    },
    singleTransaction: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    imageTransactionBorder: {
        borderWidth: 1,
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
    valueTransactionPositive: {
        fontFamily: 'Inter_900Black',
        flex: 1,
        textAlign: 'right',
        opacity: 0.9,
        color: '#0F9F2F',
    },
    valueTransactionNegative: {
        fontFamily: 'Inter_900Black',
        flex: 1,
        textAlign: 'right',
        opacity: 0.9,
        color: '#FF3A3A',
    }
})

export default style