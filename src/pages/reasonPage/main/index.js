import React, {useEffect, useState} from "react";
import { ScrollView, RefreshControl, View, TextInput, Text, TouchableOpacity } from 'react-native'
import Logo from "../logo";
import Body from "../body";
import styles from "./styles"

export default function (){

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
        setRefreshing(false);
        }, 2000);}, []);

        const [data, setData] = useState([{key:Math.random(),date:"28/10/2023",message:"O NEXT é épico!!!"}])

        const [imessage, setMessage] = useState('');

    function postar(){
        data.push({key:Math.random(),date:"28/10/2023",message:imessage})
        console.log(data)
    }

    return(
        <View>
            <Logo></Logo>
            
            <Text style={styles.textTitleBody}>Lembre-se sempre de tentar ver o lado bom, conte nos a razão para continuar de hoje:</Text>
            
            <View style={styles.View}>
                <TextInput
                style={styles.TextNameUser}
                onChangeText={newText => setMessage(newText)}
                > </TextInput>
            </View>

            <View style={styles.ViewCenter}>

                <TouchableOpacity
                style={styles.Button}
                onPress = {() => {postar(), onRefresh()}}
                ><Text style={styles.TextName}>Postar</Text>
                </TouchableOpacity>

            </View>
                <ScrollView style={{height:"40%"}}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>

                {
                    data.map((item) => {
                        return <Body extraData={item} key={item.key} data={item}/>
                    }).reverse()
                }

                </ScrollView>
            </View>
    );
}
