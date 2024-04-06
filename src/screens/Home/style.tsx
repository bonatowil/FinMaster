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
        backgroundColor: '#093637',
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
    },
    homeWrap: {
        backgroundColor: '#EFF2F1',
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        flex: 1,
    },
    headerBackground: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    header: {
        marginTop: 50,
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.20)',
        borderRadius: 15,
        marginHorizontal: 4,
    },
    saldo: {
        width: '100%',
        padding: 20,
        justifyContent: 'center',
        paddingLeft: 14,
    },
    saldoText: {
        color: '#EFF2F1',
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
        color: '#EFF2F1',
        fontFamily: 'Inter_400Regular',
        fontSize: 15,
    },
    saldoImg: {
        width: 25,
        height: 25,
    },
    quickAccess: {
        backgroundColor: '#EFF2F1',
        borderRadius: 40,
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        shadowColor: "#FFF",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.15,
        elevation: 10,
    }
})

export default style