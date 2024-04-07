import { View, Text, TextInput, TouchableOpacity, FlatList, Image, Modal} from "react-native";
import { moneyFormat } from "../../utils";
import style from "./style";
import { setTokenSourceMapRange } from "typescript";
import AddIcon from '../../assets/icons/Add.png'
import { useState } from "react";

function Account(props) {
    if (props.add) {
        return (
            <TouchableOpacity style={[style.account]} onPress={props.changeVisibility}>
                <Image style={style.addAccount} source={AddIcon}/>
            </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity style={[style.account, {backgroundColor: props.color}]}>
            <View style={style.accountTitle}>
                <Text numberOfLines={3} style={style.bankName}>{props.bank}</Text>
                <Text numberOfLines={3} style={style.ownerName}>{props.name}</Text>                
            </View>
            <View>
                <Text style={style.accountBalance}>{moneyFormat(props.balance, null)}</Text>
            </View>
        </TouchableOpacity>
    )
}

export function Accounts() {
    const [visibility, setVisibility] = useState(false)
    const accounts = [
        { add: true}, { name: 'Wilson', bank: 'Nubank', balance: 100, color: '#BE7ADD'}, { name: 'Wilson', bank: 'Inter', balance: 200 , color: '#FBBD1D'},
        { name: 'Wilson', bank: 'Santander', balance: 200 , color: '#FF5151'}, { name: 'Wilson', bank: 'Nubank', balance: 100, color: '#BE7ADD'},
        { name: 'Wilson', bank: 'Inter', balance: 200 , color: '#FBBD1D'}, { name: 'Wilson', bank: 'Santander', balance: 200 , color: '#FF5151'},
        { name: 'Wilson', bank: 'Nubank', balance: 100, color: '#BE7ADD'},
    ]
    return (
        <View style={{flex: 1}}>
            <FlatList
            data={accounts}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            renderItem={({item}) => <Account changeVisibility={() => setVisibility(!visibility)} name={item.name} bank={item.bank} balance={item.balance} color={item.color} add={item.add}/>}
            numColumns={2}
            />
            <Modal
            visible={visibility}
            transparent={true}
            animationType={'fade'}
            onRequestClose={this.closeModal}
            >
                <View style={style.modalWrap}>
                    <View style={style.registerModal}>
                        <View style={style.modalTitle}>
                            <Text style={{fontFamily: 'Inter_700Bold', opacity: 0.75, margin: 8}}>Cadastrar conta bancária</Text>
                            <TouchableOpacity onPress={() => setVisibility(false)}>
                                <Image style={{height: 24, width: 24, resizeMode: 'center', margin: 8}} source={require('../../assets/icons/Close.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={style.separator}></View>
                        <View style={style.registerForm}>
                            <View style={style.registerField}>
                                <Text style={style.regiterLabel}>Titular da conta:</Text>
                                <TextInput
                                style={style.registerInput}
                                selectionColor={'#44a08d'}
                                ></TextInput>
                            </View>
                            <View style={style.registerField}>
                                <Text style={style.regiterLabel}>Nome do banco:</Text>
                                <TextInput
                                style={style.registerInput}
                                selectionColor={'#44a08d'}
                                ></TextInput>
                            </View>
                            <View style={style.registerField}>
                                <Text style={style.regiterLabel}>Valor inicial:</Text>
                                <TextInput
                                style={style.registerInput}
                                keyboardType="numeric"
                                selectionColor={'#44a08d'}
                                ></TextInput>
                            </View>
                        </View>
                        <View style={style.separator}></View>
                    </View>
                </View>
            </Modal>

        </View>
    )
}