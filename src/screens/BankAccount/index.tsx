import { View, Text, FlatList} from "react-native";
import style from "./style";
import { Accounts } from "../../components/BackAccountComponents";


export default function BankAccounts( {navigation} ) {
    return (
        <View style={style.mainContainer}>
            <Accounts/>             
        </View>
    )
}