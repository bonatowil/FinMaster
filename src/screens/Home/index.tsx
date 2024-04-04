import { View, Text, TouchableOpacity, Image} from "react-native";
import style from "./style";
import { useState } from "react";
import { QuickAccess, TransactionHistory} from "../../components/HomeComponents";
import { moneyFormat } from "../../utils";
import eyeOn from '../../assets/icons/EyeOpen.png'
import eyeOff from '../../assets/icons/EyeClosed.png'
import { Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
	const [balanceVisibility, setBalanceVisibility] = useState(true);
	const [balance, setBalance] = useState(0);

	function changeBalanceVisibility() {
		setBalanceVisibility((visibility: boolean) => {return !visibility});	
	}    
    return (
        <View style={style.homeContainer}>
        <LinearGradient
        colors={['#266dd3', '#3aeadb']}
        locations={[0.05, 1]}
        end={{x: 0.4, y: 0.3}}
        style={style.background}
        >
            <View style={style.saldo}>
                <Text style={style.saldoLabel}>Saldo total</Text>
                <Text style={balanceVisibility ? style.saldoText : style.saldoTextHidden}>
                    {moneyFormat(balance, null)}
                    <TouchableOpacity style={{paddingLeft: 10}} onPress={changeBalanceVisibility}>
                        <Image style={style.saldoImg} source={balanceVisibility ? eyeOn : eyeOff}/>
                    </TouchableOpacity>
                </Text>
            </View>
            <View style={style.quickAccess}>
                <QuickAccess></QuickAccess>
            </View>
            <View style={style.homeWrap}>
                <TransactionHistory></TransactionHistory>
            </View>
        </LinearGradient>
        </View>
    )
}