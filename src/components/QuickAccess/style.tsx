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
})

export default style