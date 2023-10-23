import React, {useState} from "react";
import { View, ScrollView, Text, TextInput, TouchableOpacity } from "react-native"
import styles from "./styles"


export default function Creation({navigation}){

    const [date, setDate] = useState(new Date())

    return(
        <View style={styles.MarginView}>
            <Text style={styles.TextLogin}>Nome completo:</Text>

            <TextInput style={styles.InputLogin}
            placeholder="Ana Maria Silva"
            ></TextInput>

            <Text style={styles.TextLogin}>Usuário:</Text>

            <TextInput style={styles.InputLogin}
            placeholder="@zsmille3"
            ></TextInput>

            <Text style={styles.TextLogin}>Data de nascimento:</Text>

            <TextInput style={styles.InputLogin}
            keyboardType='number-pad'
            placeholder="28-10-2000"
            ></TextInput>

            <Text style={styles.TextLogin}>Email:</Text>

            <TextInput style={styles.InputLogin}
            placeholder="ana.silva@outlook.com"
            ></TextInput>

            <Text style={styles.TextLogin}>Senha:</Text>

            <TextInput style={styles.InputLogin}
            placeholder="**********"
            secureTextEntry={true}
            ></TextInput>

            <Text style={styles.TextLogin}>Confirme a senha:</Text>

            <TextInput style={styles.InputLogin}
            placeholder="**********"
            secureTextEntry={true}
            ></TextInput>

            <TouchableOpacity
            style={styles.button}
            onPress={()=> navigation.navigate('Login')}
            ><Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}