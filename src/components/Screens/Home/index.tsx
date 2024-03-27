import { View, Text, TouchableOpacity, Image } from "react-native";
import style from "./style";
import { useState } from "react";
import { TransactionHistory} from "../../ScreensComponents/HomeComponents";
import eyeOn from '../../../../assets/icons/EyeOpen.png'
import eyeOff from '../../../../assets/icons/EyeClosed.png'

export default function Home( {navigation} ) {
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
                    <Text style={style.quickAccessLabel}>Acesso Rápido</Text>
                    <View style={style.quickAccessButtons}>
                        <TouchableOpacity style={style.quickAccessButton} onPress={() => navigation.navigate("BankAccount")}>
                            <Image style={style.quickAccessImage} source={require('../../../../assets/icons/Bank.png')}></Image>
                            <Text style={style.quickAccessText}>Contas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.quickAccessButton} onPress={() => navigation.navigate("Inflow")}>
                            <Image style={style.quickAccessImage} source={require('../../../../assets/icons/Inflow.png')}></Image>
                            <Text style={style.quickAccessText}>Entrada</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.quickAccessButton} onPress={() => navigation.navigate("Outflow")}>
                            <Image style={style.quickAccessImage} source={require('../../../../assets/icons/Outflow.png')}></Image>
                            <Text style={style.quickAccessText}>Saída</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.quickAccessButton} onPress={() => navigation.navigate("Finances")}>
                            <Image style={style.quickAccessImage} source={require('../../../../assets/icons/Statistics.png')}></Image>
                            <Text style={style.quickAccessText}>Finanças</Text>
                        </TouchableOpacity>
                    </View>
                    <TransactionHistory></TransactionHistory>
                </View>    
            </View>
        </View>
    )
}