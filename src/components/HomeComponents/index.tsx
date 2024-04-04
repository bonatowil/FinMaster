import { View, Text, TouchableOpacity, Image, SectionList } from "react-native"
import { useState } from "react"
import style from "./style"
import { useNavigation } from "@react-navigation/native"
import { StackTypes } from "../../routes/stack"
import { moneyFormat } from "../../utils"

export function QuickAccess() {
    const navigation = useNavigation<StackTypes>()
    return (
        <View>
            <Text style={style.quickAccessLabel}>Acesso Rápido</Text>
            <View style={style.quickAccessButtons}>
                <TouchableOpacity style={style.quickAccessButton} onPress={() => navigation.navigate("Contas")}>
                    <Image style={style.quickAccessImage} source={require('../../assets/icons/Bank.png')}></Image>
                    <Text style={style.quickAccessText}>Contas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.quickAccessButton} onPress={() => navigation.navigate("Entradas")}>
                    <Image style={style.quickAccessImage} source={require('../../assets/icons/Inflow.png')}></Image>
                    <Text style={style.quickAccessText}>Entrada</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.quickAccessButton} onPress={() => navigation.navigate("Saídas")}>
                    <Image style={style.quickAccessImage} source={require('../../assets/icons/Outflow.png')}></Image>
                    <Text style={style.quickAccessText}>Saída</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.quickAccessButton} onPress={() => navigation.navigate("Finanças")}>
                    <Image style={style.quickAccessImage} source={require('../../assets/icons/Statistics.png')}></Image>
                    <Text style={style.quickAccessText}>Finanças</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function Transaction(props) {
    const navigation = useNavigation<StackTypes>()
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Contas')}>
                <View style={style.singleTransaction}>
                    <View style={style.imageTransactionBorder}><Image style={style.imageTransaction} source={props.image}></Image></View>
                    <View>
                        <Text style={style.typeTransaction}>{props.type}</Text>
                        <Text style={style.descTransaction}>{props.desc}</Text>
                    </View>
                    <Text style={props.positive ? style.valueTransactionPositive : style.valueTransactionNegative}>
                        {moneyFormat(props.value, props.positive)}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
)

}

export function TransactionHistory() {
    const [transaction, setTransaction] = useState([
        {   
          date: '06 MAR 24',
          data: [
            ['Comida', 'Restaurante Chique', 189.90, require('../../assets/icons/Food.png'), 1],
            ['Compras Online', 'IFood', 28.50, require('../../assets/icons/OnlineShopping.png'), 0],
            ['Saúde', 'Mensalidade Academia', 99.00, require('../../assets/icons/Gym.png'), 1]
        ]
        },
        {
          date: '05 MAR 24',
          data: [
            ['Comida', 'Restaurante Chique', 189.90, require('../../assets/icons/Food.png'), 1],
            ['Compras Online', 'IFood', 28.50, require('../../assets/icons/OnlineShopping.png'), 0],
            ['Saúde', 'Mensalidade Academia', 99.00, require('../../assets/icons/Gym.png'), 1]
					]
        }, 
		{
          date: '05 MAR 24',
          data: [
            ['Comida', 'Restaurante Chique', 189.90, require('../../assets/icons/Food.png'), 1],
            ['Compras Online', 'IFood', 28.50, require('../../assets/icons/OnlineShopping.png'), 0],
            ['Saúde', 'Mensalidade Academia', 99.00, require('../../assets/icons/Gym.png'), 1]
					]
        },
        {
            date: '05 MAR 24',
            data: [
              ['Comida', 'Restaurante Chique', 189.90, require('../../assets/icons/Food.png'), 1],
              ['Compras Online', 'IFood', 28.50, require('../../assets/icons/OnlineShopping.png'), 0],
              ['Saúde', 'Mensalidade Academia', 99.00, require('../../assets/icons/Gym.png'), 1]
                      ]
        },
        {
            date: '05 MAR 24',
            data: [
              ['Comida', 'Restaurante Chique', 189.90, require('../../assets/icons/Food.png'), 1],
              ['Compras Online', 'IFood', 28.50, require('../../assets/icons/OnlineShopping.png'), 0],
              ['Saúde', 'Mensalidade Academia', 99.00, require('../../assets/icons/Gym.png'), 1]
                      ]
          }
        
        
    ])
    return (
        <View style={{flex: 1}}>
            <View>
                <Text style={{color: '#171313', paddingVertical:12, textAlign: 'center', fontFamily: 'Inter_700Bold', opacity: 0.75, fontSize: 18}}>Extrato</Text>
            </View>
            <View style={{flex: 1}}>
                <SectionList
                style={style.transactions}
                contentContainerStyle={{flexGrow: 1}}
                sections={transaction}
                stickySectionHeadersEnabled={false}
                renderItem={({item}) => <Transaction type={item[0]} desc={item[1]} value={item[2]} image={item[3]} positive={item[4]}/>}
                renderSectionHeader={({section}) => (<Text style={style.textDate}>{section.date}</Text>)}
                />
            </View>
        </View>
    )
}