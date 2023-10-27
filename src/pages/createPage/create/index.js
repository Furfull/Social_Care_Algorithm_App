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
            onPress={()=> navigation.navigate('CriarContaFormulario')}
            ><Text style={styles.buttonText}>Formulário</Text>
            </TouchableOpacity>

            <View>

            <Modal
                visible={state}
                animationType="fade"
                transparent={true}
                >
                    <View style={styles.ModalStyleAjuda}>

                    <ScrollView>
                    <Text style={styles.TextLogin}>Termo de Uso da Inteligência Artificial de Monitoramento de Redes Sociais - SCA

Este Termo de Uso (doravante denominado "Termo") estabelece as condições para o uso da inteligência artificial de monitoramento de redes sociais - SCA (doravante denominada "IA de Monitoramento") fornecida pela SCA (doravante denominada "Fornecedor") e descreve os direitos e responsabilidades do usuário (doravante denominado "Usuário" ou "Você").
1. Aceitação dos Termos

Ao utilizar a IA de Monitoramento, Você concorda com todos os termos e condições estabelecidos neste documento. Se não concordar com qualquer parte deste Termo, não utilize a IA de Monitoramento.

2. Finalidade

A IA de Monitoramento é fornecida com o propósito de auxiliar na análise de conteúdo em redes sociais. Ela pode ser usada para rastrear, classificar e analisar postagens, comentários e outros tipos de conteúdo compartilhados em redes sociais.

3. Privacidade e Dados

O Fornecedor se compromete a respeitar a privacidade dos Usuários e a cumprir as leis de proteção de dados aplicáveis. A IA de Monitoramento não coleta, armazena ou compartilha informações pessoais dos Usuários sem autorização explícita.

4. Responsabilidades do Usuário

O Usuário concorda em utilizar a IA de Monitoramento de maneira ética e legal, respeitando todas as leis e regulamentos aplicáveis relacionados à privacidade e à segurança. O Usuário é responsável pelo uso adequado da IA de Monitoramento.

5. Limitações de Responsabilidade

A IA de Monitoramento é uma ferramenta de suporte à tomada de decisões. O Fornecedor não se responsabiliza por ações ou decisões tomadas com base nas informações fornecidas pela IA de Monitoramento. O Usuário reconhece que a IA de Monitoramento pode não ser 100% precisa.</Text>
                    </ScrollView>
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