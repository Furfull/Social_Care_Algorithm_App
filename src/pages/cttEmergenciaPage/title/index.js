import React from "react";
import { View, Text, Image } from "react-native"
import styles from "./styles"


export default function Title(){
    return(
        <View style={styles.boxTitle}>

            <Image style={styles.stretch2} source={require("D:/SCA/sca-app/src/assets/negocinhoPeq.png")}></Image>

            <Text style={styles.textTitle}>Conseguimos com uma pequena ajuda de nossos amigos</Text>
        
            <Image style={styles.stretch1} source={require("D:/SCA/sca-app/src/assets/negocinho.png")}></Image>
        </View>
    );
}