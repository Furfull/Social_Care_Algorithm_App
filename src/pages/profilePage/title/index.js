import React from "react";
import { View, Text, Image } from "react-native"
import styles from "./styles"


export default function Title(){
    return(
        <View style={styles.boxTitle}>

            <Image style={styles.stretch2} source={require("D:/SCA/sca-app/src/assets/negocinhoPeq.png")}></Image>

            <View>
            <Text style={styles.textTitle}>Ajude-nos a te conhecer melhor</Text>
            <Image style={styles.stretch} source={require("D:/SCA/sca-app/src/assets/foto_laranja.jpg")}></Image>
            </View>

            <Image style={styles.stretch1} source={require("D:/SCA/sca-app/src/assets/negocinho.png")}></Image>

            <Text style={styles.TextName}>Nome Completo</Text>
            <Text style={styles.TextNameUser}>Levi Gabriel Souza de Araújo</Text>
        </View>
    );
}