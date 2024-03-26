import { StyleSheet } from "react-native";

const style = StyleSheet.create({
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