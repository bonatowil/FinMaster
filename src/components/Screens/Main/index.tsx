import { View, Text, SectionList, TouchableOpacity, Image, ScrollView} from "react-native";
import style from "./style";
import { useState } from "react";
import { QuickAccess, TransactionHistory} from "../../ScreensComponents/MainComponents";
import eyeOn from '../../../../assets/icons/EyeOpen.png'
import eyeOff from '../../../../assets/icons/EyeClosed.png'

export default function Main() {
	const [balanceVisibility, setBalanceVisibility] = useState(true);
	const [balance, setBalance] = useState("R$ 2.530,37");

	function changeBalanceVisibility() {
		setBalanceVisibility((visibility: boolean) => {return !visibility});	
	}    
    return (
        <View style={style.mainContainer}>
        <View style={style.saldo}>
            <Text style={style.saldoLabel}>Saldo total</Text>
            <Text style={balanceVisibility ? style.saldoText : style.saldoTextHidden}>{balance} <TouchableOpacity onPress={changeBalanceVisibility}><Image style={style.saldoImg} source={balanceVisibility ? eyeOn : eyeOff}/></TouchableOpacity></Text>
        </View>
            <View style={style.mainWrap}>
                <View>
                    <QuickAccess></QuickAccess>
                    <TransactionHistory></TransactionHistory>
                </View>    
            </View>
        </View>
    )
}