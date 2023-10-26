import React from "react";
import { View, Text } from "react-native"
import styles from "./styles"


export default function Body({data}){
    return(
        <View style={styles.View}>
            <Text style={styles.TextName}>{data.date}</Text>
            <Text style={styles.TextNameUser}>{data.message}</Text>
        </View>
    );
}
