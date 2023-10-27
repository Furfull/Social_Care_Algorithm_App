import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native"
import styles from "./styles"
import NotificationEndpoint from "../../../service/IA_connection";

export default function LoginSocial({navigation}){

    async function getResposeIA() {
        const request =  NotificationEndpoint()
        return request
    }
    
    return(
        <View style={styles.touchable}>
            <Text style={styles.textLogin}>Ou use:</Text>
            <View style={styles.row}> 
            <Image style={styles.stretch} source={require("D:/SCA/sca-app/src/assets/facebook-logo-blue-circle-large-transparent-png.png")}></Image>
            <View style={styles.view}/>
            <Image style={styles.stretch} source={require("D:/SCA/sca-app/src/assets/google-37.png")}></Image>
            </View>
            <TouchableOpacity
            style={styles.button}
            onPress={()=> {navigation.navigate('Pages'), getResposeIA()}}
            ><Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.touchable}>
            
            <Text style={styles.TextCadastro}
            onPress={()=> navigation.navigate('CriarConta')}
            >Não possuo cadastro</Text>
            </View>
        </View>
    );
}