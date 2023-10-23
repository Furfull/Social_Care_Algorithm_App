import React from "react";
import { View, Image } from "react-native"
import styles from "./styles"


export default function Logo(){
    return(
        <View style={styles.logo}>
            <Image style={styles.stretch} source={require("D:/SCA/sca-app/src/assets/contacts.png")}></Image>
        </View>
    );
}