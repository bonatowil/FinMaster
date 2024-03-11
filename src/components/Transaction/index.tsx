import { Text, View, Image} from "react-native";
import style from "./style";

export default function Transaction(props) {
        return (
        <View style={style.dateTransactions}>
            <View style={style.singleTransaction}>
                <View style={style.imageTransactionBorder}><Image style={style.imageTransaction} source={props.image}></Image></View>
                <View style={style.textTransaction}>
                    <Text style={style.typeTransaction}>{props.type}</Text>
                    <Text style={style.descTransaction}>{props.desc}</Text>
                </View>
                <Text style={style.valueTransaction}>R$ {props.value}</Text>
            </View>
        </View>
    )
    
}