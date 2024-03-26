import { View, Text, TouchableOpacity, Image } from "react-native"
import style from "./style"

export default function QuickAccess() {
    return (
        <View>
            <Text style={style.quickAccessLabel}>Acesso Rápido</Text>
            <View style={style.quickAccessButtons}>
                <TouchableOpacity style={style.quickAccessButton}>
                    <Image style={style.quickAccessImage} source={require('../../../assets/icons/Bank.png')}></Image>
                    <Text style={style.quickAccessText}>Contas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.quickAccessButton}>
                    <Image style={style.quickAccessImage} source={require('../../../assets/icons/Inflow.png')}></Image>
                    <Text style={style.quickAccessText}>Entrada</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.quickAccessButton}>
                    <Image style={style.quickAccessImage} source={require('../../../assets/icons/Outflow.png')}></Image>
                    <Text style={style.quickAccessText}>Saída</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.quickAccessButton}>
                    <Image style={style.quickAccessImage} source={require('../../../assets/icons/Statistics.png')}></Image>
                    <Text style={style.quickAccessText}>Finanças</Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}