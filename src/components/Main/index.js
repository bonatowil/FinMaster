import { View, Text, ScrollView, TouchableOpacity, Image} from "react-native";
import style from "./style";

export default function Main() {
    return (
        <View style={style.mainContainer}>
        <View style={style.saldo}>
            <Text style={style.saldoLabel}>Saldo total</Text>
            <Text style={style.saldoText}>R$ 2.530,37</Text>
        </View>
            <View style={style.mainWrap}>
                <View style={style.main}>
                    <View style={style.quickAccess}>
                        <Text style={style.quickAccessLabel}>Acesso Rápido</Text>
                        <View style={style.quickAccessButtons} horizontal={true}>
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
                    <ScrollView style={style.transactions}>
                        <View style={{flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center',}}>
                            <View style={{flex: 1, height: .5, backgroundColor: 'black'}} />
                            <View>
                                <Text style={{color: '#171313', paddingHorizontal:8, textAlign: 'center', fontFamily: 'Inter_700Bold', opacity: 0.75, fontSize: 18}}>Extrato</Text>
                            </View>
                            <View style={{flex: 1, height: .5, backgroundColor: 'black'}} />
                        </View>
                        <View style={style.dateTransactions}>
                            <Text style={style.textDate}>04 MAR 2024</Text>
                            <View style={style.singleTransaction}>
                                <View style={style.imageTransactionBorder}><Image style={style.imageTransaction} source={require('../../../assets/icons/Food.png')}></Image></View>
                                <View style={style.textTransaction}>
                                    <Text style={style.typeTransaction}>Comida</Text>
                                    <Text style={style.descTransaction}>Restaurante Chique</Text>
                                </View>
                                <Text style={style.valueTransaction}>R$ 189,00</Text>
                            </View>
                            <View style={style.singleTransaction}>
                                <View style={style.imageTransactionBorder}><Image style={style.imageTransaction} source={require('../../../assets/icons/Food.png')}></Image></View>
                                <View style={style.textTransaction}>
                                    <Text style={style.typeTransaction}>Comida</Text>
                                    <Text style={style.descTransaction}>Restaurante Chique</Text>
                                </View>
                                <Text style={style.valueTransaction}>R$ 189,00</Text>
                            </View>
                            <View style={style.singleTransaction}>
                                <View style={style.imageTransactionBorder}><Image style={style.imageTransaction} source={require('../../../assets/icons/Food.png')}></Image></View>
                                <View style={style.textTransaction}>
                                    <Text style={style.typeTransaction}>Comida</Text>
                                    <Text style={style.descTransaction}>Restaurante Chique</Text>
                                </View>
                                <Text style={style.valueTransaction}>R$ 189,00</Text>
                            </View>
                            <View style={style.singleTransaction}>
                                <View style={style.imageTransactionBorder}><Image style={style.imageTransaction} source={require('../../../assets/icons/Food.png')}></Image></View>
                                <View style={style.textTransaction}>
                                    <Text style={style.typeTransaction}>Comida</Text>
                                    <Text style={style.descTransaction}>Restaurante Chique</Text>
                                </View>
                                <Text style={style.valueTransaction}>R$ 189,00</Text>
                            </View>
                            <Text style={style.textDate}>03 MAR 2024</Text>
                            <View style={style.singleTransaction}>
                                <View style={style.imageTransactionBorder}><Image style={style.imageTransaction} source={require('../../../assets/icons/Food.png')}></Image></View>
                                <View style={style.textTransaction}>
                                    <Text style={style.typeTransaction}>Comida</Text>
                                    <Text style={style.descTransaction}>Restaurante Chique</Text>
                                </View>
                                <Text style={style.valueTransaction}>R$ 189,00</Text>
                            </View>
                            <Text style={style.textDate}>02 MAR 2024</Text>
                            <View style={style.singleTransaction}>
                                <View style={style.imageTransactionBorder}><Image style={style.imageTransaction} source={require('../../../assets/icons/Food.png')}></Image></View>
                                <View style={style.textTransaction}>
                                    <Text style={style.typeTransaction}>Comida</Text>
                                    <Text style={style.descTransaction}>Restaurante Chique</Text>
                                </View>
                                <Text style={style.valueTransaction}>R$ 189,00</Text>
                            </View>
                            <View style={style.singleTransaction}>
                                <View style={style.imageTransactionBorder}><Image style={style.imageTransaction} source={require('../../../assets/icons/Food.png')}></Image></View>
                                <View style={style.textTransaction}>
                                    <Text style={style.typeTransaction}>Comida</Text>
                                    <Text style={style.descTransaction}>Restaurante Chique</Text>
                                </View>
                                <Text style={style.valueTransaction}>R$ 189,00</Text>
                            </View>
                            <View style={style.singleTransaction}>
                                <View style={style.imageTransactionBorder}><Image style={style.imageTransaction} source={require('../../../assets/icons/Food.png')}></Image></View>
                                <View style={style.textTransaction}>
                                    <Text style={style.typeTransaction}>Comida</Text>
                                    <Text style={style.descTransaction}>Restaurante Chique</Text>
                                </View>
                                <Text style={style.valueTransaction}>R$ 189,00</Text>
                            </View>
                            <Text style={style.textDate}>01 MAR 2024</Text>
                            <View style={style.singleTransaction}>
                                <View style={style.imageTransactionBorder}><Image style={style.imageTransaction} source={require('../../../assets/icons/Food.png')}></Image></View>
                                <View style={style.textTransaction}>
                                    <Text style={style.typeTransaction}>Comida</Text>
                                    <Text style={style.descTransaction}>Restaurante Chique</Text>
                                </View>
                                <Text style={style.valueTransaction}>R$ 189,00</Text>
                            </View>
                            <View style={style.singleTransaction}>
                                <View style={style.imageTransactionBorder}><Image style={style.imageTransaction} source={require('../../../assets/icons/Food.png')}></Image></View>
                                <View style={style.textTransaction}>
                                    <Text style={style.typeTransaction}>Comida</Text>
                                    <Text style={style.descTransaction}>Restaurante Chique</Text>
                                </View>
                                <Text style={style.valueTransaction}>R$ 189,00</Text>
                            </View>
                            <View style={style.singleTransaction}>
                                <View style={style.imageTransactionBorder}><Image style={style.imageTransaction} source={require('../../../assets/icons/Food.png')}></Image></View>
                                <View style={style.textTransaction}>
                                    <Text style={style.typeTransaction}>Comida</Text>
                                    <Text style={style.descTransaction}>Restaurante Chique</Text>
                                </View>
                                <Text style={style.valueTransaction}>R$ 189,00</Text>
                            </View>
                            <Text style={style.textDate}>29 FEV 2024</Text>
                            <View style={style.singleTransaction}>
                                <View style={style.imageTransactionBorder}><Image style={style.imageTransaction} source={require('../../../assets/icons/Food.png')}></Image></View>
                                <View style={style.textTransaction}>
                                    <Text style={style.typeTransaction}>Comida</Text>
                                    <Text style={style.descTransaction}>Restaurante Chique</Text>
                                </View>
                                <Text style={style.valueTransaction}>R$ 189,00</Text>
                            </View>
                            <View style={[style.singleTransaction, {marginBottom: 180}]}>
                                <View style={style.imageTransactionBorder}><Image style={style.imageTransaction} source={require('../../../assets/icons/Food.png')}></Image></View>
                                <View style={style.textTransaction}>
                                    <Text style={style.typeTransaction}>Comida</Text>
                                    <Text style={style.descTransaction}>Restaurante Chique</Text>
                                </View>
                                <Text style={style.valueTransaction}>R$ 189,00</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>    
            </View>
        </View>
    )
}