import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native"
import styles from "./styles"

export default function LoginSocial({navigation}){
    
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
            onPress={()=> navigation.navigate('Pages')}
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