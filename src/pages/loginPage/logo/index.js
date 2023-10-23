import React from "react";
import { View, Image } from "react-native"
import styles from "./styles"


export default function Logo(){
    return(
        <View style={styles.boxTitle}>

            <Image style={styles.stretch2} source={require("D:/SCA/sca-app/src/assets/negocinhoPeq.png")}></Image>

            <Image style={styles.stretch} source={require("D:/SCA/sca-app/src/assets/logo.png")}></Image>
            
            <Image style={styles.stretch1} source={require("D:/SCA/sca-app/src/assets/negocinho.png")}></Image>
     
        </View>
    );
}