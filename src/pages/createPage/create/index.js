import React, {useState} from "react";
import { View, ScrollView, Text, TextInput, TouchableOpacity, Modal } from "react-native"
import styles from "./styles"


export default function Creation({navigation}){

    const [state, setState] = useState(false)

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
            
            <View style={styles.MarginViewLast}>
            <Text style={styles.TextCadastro}
                onPress={()=> setState(true)}
                >Termos de uso</Text>
            </View>

            <TouchableOpacity
            style={styles.button}
            onPress={()=> navigation.navigate('Login')}
            ><Text style={styles.buttonText}>Criar</Text>
            </TouchableOpacity>

            <View>

            <Modal
                visible={state}
                animationType="fade"
                transparent={true}
                >
                    <View style={styles.ModalStyleAjuda}>

                    <Text style={styles.TextLogin}>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</Text>

                    <View style={styles.MarginViewLast}>
                        <TouchableOpacity
                        style={styles.Button}
                        onPress = {() => setState(!state)}
                        ><Text style={styles.Text}>Fechar e aceitar</Text>
                        </TouchableOpacity>
                    </View>

                    </View>
                </Modal>

            </View>
        </View>
    );
}