import { View, Text, TouchableOpacity, Image, SectionList } from "react-native"
import { useState } from "react"
import style from "./style"

function Transaction(props) {
    return (
    <View style={style.dateTransactions}>
        <View style={style.singleTransaction}>
            <View style={style.imageTransactionBorder}><Image style={style.imageTransaction} source={props.image}></Image></View>
            <View>
                <Text style={style.typeTransaction}>{props.type}</Text>
                <Text style={style.descTransaction}>{props.desc}</Text>
            </View>
            <Text style={style.valueTransaction}>R$ {props.value}</Text>
        </View>
    </View>
)

}

export function TransactionHistory() {
    const [transaction, setTransaction] = useState([
        {   
          date: '06 MAR 24',
          data: [
            ['Comida', 'Restaurante Chique', '189,90', require('../../../../assets/icons/Food.png')],
            ['Compras Online', 'IFood', '28,50', require('../../../../assets/icons/OnlineShopping.png')],
            ['Saúde', 'Mensalidade Academia', '99,00', require('../../../../assets/icons/Gym.png')]
        ]
        },
        {
          date: '05 MAR 24',
          data: [
            ['Comida', 'Restaurante Chique', '189,90', require('../../../../assets/icons/Food.png')],
            ['Compras Online', 'IFood', '28,50', require('../../../../assets/icons/OnlineShopping.png')],
            ['Saúde', 'Mensalidade Academia', '99,00', require('../../../../assets/icons/Gym.png')]
					]
        }, 
				{
          date: '05 MAR 24',
          data: [
            ['Comida', 'Restaurante Chique', '189,90', require('../../../../assets/icons/Food.png')],
            ['Compras Online', 'IFood', '28,50', require('../../../../assets/icons/OnlineShopping.png')],
            ['Saúde', 'Mensalidade Academia', '99,00', require('../../../../assets/icons/Gym.png')]
					]
				}
    ])
    return (
        <View>
            <View style={{flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center',}}>
                <View style={{flex: 1, height: .5, backgroundColor: 'black'}} />
                <View>
                    <Text style={{color: '#171313', paddingHorizontal:8, textAlign: 'center', fontFamily: 'Inter_700Bold', opacity: 0.75, fontSize: 18}}>Extrato</Text>
                </View>
                <View style={{flex: 1, height: .5, backgroundColor: 'black'}} />
            </View>
            <View>
                <SectionList
                style={style.transactions}
                sections={transaction}
                renderItem={({item}) => <Transaction type={item[0]} desc={item[1]} value={item[2]} image={item[3]}/>}
                renderSectionHeader={({section}) => (<Text style={style.textDate}>{section.date}</Text>)}
                />
            </View>
        </View>
    )
}

export function QuickAccess() {
    return (
        <View>
            <Text style={style.quickAccessLabel}>Acesso Rápido</Text>
            <View style={style.quickAccessButtons}>
                <TouchableOpacity style={style.quickAccessButton}>
                    <Image style={style.quickAccessImage} source={require('../../../../assets/icons/Bank.png')}></Image>
                    <Text style={style.quickAccessText}>Contas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.quickAccessButton}>
                    <Image style={style.quickAccessImage} source={require('../../../../assets/icons/Inflow.png')}></Image>
                    <Text style={style.quickAccessText}>Entrada</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.quickAccessButton}>
                    <Image style={style.quickAccessImage} source={require('../../../../assets/icons/Outflow.png')}></Image>
                    <Text style={style.quickAccessText}>Saída</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.quickAccessButton}>
                    <Image style={style.quickAccessImage} source={require('../../../../assets/icons/Statistics.png')}></Image>
                    <Text style={style.quickAccessText}>Finanças</Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}