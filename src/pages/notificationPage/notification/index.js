import React from "react";
import { View, Text } from "react-native"
import styles from "./styles";


export default function Notification({data}){

    return(
        <View style={styles.View}>
            <Text style={styles.TextName}>{data.date}</Text>
            <Text style={styles.TextNameUser}>{data.text}</Text>
        </View>
    );
}