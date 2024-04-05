import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    account: {
        backgroundColor: '#FFF',
        height: 150,
        width: '45%',
        margin: 10,
        padding: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.35,
        shadowRadius: 5,
        elevation: 5,
        borderColor: 'rgba(0, 0, 0, .5)',
        borderWidth: .5,
        borderRadius: 10,
    },
    addAccount: {
        height: '100%',
        width: '100%',
        resizeMode: 'center',
    },
    accountTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexShrink: 1,
        height: '40%',
    },
    bankName: {
        fontFamily: 'Inter_700Bold',
        color: '#FFFFF3',
        maxWidth: '60%',
        
    },
    ownerName: {
        maxWidth: '30%',
        fontSize: 12,
        fontFamily: 'Inter_900Black',
        color: '#FFFFF3',
        opacity: .5,

    },
    accountBalance: {
        height: '60%',
        textAlign: 'center',
        textAlignVertical: 'center', 
        fontFamily: 'Inter_700Bold',
        color: '#FFFFF3',
        fontSize: 15,
    },
    modalWrap: {
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        justifyContent: 'flex-end',
    },
    registerModal: {
        height: '40%',
        padding: 20,
        backgroundColor: '#FFFFF3',
        borderColor: '#000',
        borderWidth: 1,
        borderBottomWidth: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    modalTitle: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        width: '100%',
        backgroundColor: '#000',
        marginTop: 8,
    }
})

export default style