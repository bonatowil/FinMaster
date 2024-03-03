import { View, Text, ScrollView} from "react-native";
import style from "./style";

export default function Main() {
    return (
        <View style={style.mainContainer}>
            <View style={style.scrollerWrap}>
                <ScrollView style={style.scroller}>
                </ScrollView>    
            </View>
        </View>
    )
}