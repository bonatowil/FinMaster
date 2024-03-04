import { View, Text, ScrollView, TouchableOpacity} from "react-native";
import style from "./style";

export default function Main() {
    return (
        <View style={style.mainContainer}>
        <View style={style.saldo}>
            <Text style={style.saldoLabel}>Saldo total</Text>
            <Text style={style.saldoText}>R$ 2.530,37</Text>
        </View>
            <View style={style.scrollerWrap}>
                <ScrollView style={style.scroller}>
                    <View style={style.quickAccess}>
                        <Text style={style.quickAccessLabel}>Acesso Rápido</Text>
                        <ScrollView style={style.quickAccessButtons} horizontal={true}>
                            <TouchableOpacity style={style.quickAccessButton}></TouchableOpacity>
                            <TouchableOpacity style={style.quickAccessButton}></TouchableOpacity>
                            <TouchableOpacity style={style.quickAccessButton}></TouchableOpacity>
                            <TouchableOpacity style={style.quickAccessButton}></TouchableOpacity>
                            <TouchableOpacity style={style.quickAccessButton}></TouchableOpacity>
                        </ScrollView>
                    </View>
                </ScrollView>    
            </View>
        </View>
    )
}