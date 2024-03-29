import { View, Text, TouchableOpacity, Image } from "react-native";
import style from "./style";
import { useState } from "react";
import { QuickAccess, TransactionHistory} from "../../components/HomeComponents";
import eyeOn from '../../assets/icons/EyeOpen.png'
import eyeOff from '../../assets/icons/EyeClosed.png'

export default function Home() {
	const [balanceVisibility, setBalanceVisibility] = useState(true);
	const [balance, setBalance] = useState("R$ 2.530,37");

	function changeBalanceVisibility() {
		setBalanceVisibility((visibility: boolean) => {return !visibility});	
	}    
    return (
        <View style={style.homeContainer}>
        <View style={style.saldo}>
            <Text style={style.saldoLabel}>Saldo total</Text>
            <Text style={balanceVisibility ? style.saldoText : style.saldoTextHidden}>{balance} <TouchableOpacity onPress={changeBalanceVisibility}><Image style={style.saldoImg} source={balanceVisibility ? eyeOn : eyeOff}/></TouchableOpacity></Text>
        </View>
            <View style={style.homeWrap}>
                <View>
                    <QuickAccess></QuickAccess>
                    <TransactionHistory></TransactionHistory>
                </View>    
            </View>
        </View>
    )
}