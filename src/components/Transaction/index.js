import { Text, View, Image} from "react-native";
import style from "./style";

export default function  Transaction() {
    return (
        <View style={style.dateTransactions}>
            <View style={style.singleTransaction}>
                <View style={style.imageTransactionBorder}><Image style={style.imageTransaction} source={require('../../../assets/icons/Food.png')}></Image></View>
                <View style={style.textTransaction}>
                    <Text style={style.typeTransaction}>Comida</Text>
                    <Text style={style.descTransaction}>Restaurante Chique</Text>
                </View>
                <Text style={style.valueTransaction}>R$ 189,00</Text>
            </View>
        </View>
    )
    
}