import React from "react";
import { View, Text, Image } from "react-native"
import styles from "./styles"


export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>Digite o número de telefone de um(a) amigo(a) próximo(a), membro da familia ou ajuda profissional para que você possa entrar em contato, se você sentir necessidade. Esta informação é apenas para o seu uso e nunca será compartilhada com nenhuma outra organização.</Text>
        </View>
    );
}