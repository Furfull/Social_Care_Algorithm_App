import React from "react";
import { View, Text, TextInput } from "react-native"
import styles from "./styles"


export default function Login(){
    return(
        <View style={styles.MarginView}>
            <Text style={styles.TextLogin}>Usuário:</Text>

            <TextInput style={styles.InputLogin}
            placeholder="@_leviz"
            ></TextInput>

            <Text style={styles.TextLogin}>Senha:</Text>

            <TextInput style={styles.InputLogin}
            placeholder="**********"
            secureTextEntry={true}
            ></TextInput>

            <Text style={styles.TextEsqueciMinhaSenha}
            onPress={() => null}
            >Esqueci minha senha</Text>
        </View>
    );
}