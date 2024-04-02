import { View, Text, FlatList} from "react-native";
import style from "./style";
import { Accounts } from "../../components/BankAccountComponents";

export default function BankAccounts( {navigation} ) {
    return (
        <View style={style.mainContainer}>
            <Accounts/>             
        </View>
    )
}