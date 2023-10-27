import React from "react";
import { View, Text, Image } from "react-native"
import styles from "./styles"


export default function Title(){
    return(
        <View style={styles.boxTitle}>

            <Image style={styles.stretch2} source={require("D:/SCA/sca-app/src/assets/negocinhoPeq.png")}></Image>

            <Image style={styles.stretch} source={require("D:/SCA/sca-app/src/assets/logo.png")}></Image>
            
            <Image style={styles.stretch1} source={require("D:/SCA/sca-app/src/assets/negocinho.png")}></Image>
            
            <Text style={styles.textTitle}>Permissões</Text>
            <Text style={styles.textTitleBody}>Escolha as redes que gostaria de ativar a proteção do SCA.</Text>
        </View>
    );
}