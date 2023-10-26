import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView, Modal } from "react-native"
import styles from "./styles"


export default function Login(){

    const [data, setData] = useState([]);

    const [nameCont, setNameCont] = useState('');

    const [numCont, setNumCont] = useState('');

    const [state, setState] = useState(false);

    const [stateHelp, setStateHelp] = useState(false);

    function contato(){
        data.push([nameCont, ' - ' , numCont])
    }

    function Limpa(){
        setData([])
    }

    return(
        <View style={styles.MarginView}>

                <TouchableOpacity
                style={styles.ButtonEmergency}
                onPress = {() => setStateHelp(!stateHelp)}
                ><Text style={styles.TextEmergency}>Ajuda!</Text>
                </TouchableOpacity>

            <TextInput style={styles.InputCadastro}
            blurOnSubmit
            placeholder="Nome do Contato"
            onChangeText={newText => setNameCont(newText)}
            ></TextInput>

            <TextInput style={styles.InputCadastro}
            keyboardType='numeric'
            placeholder="Número do contato"
            onChangeText={newText => setNumCont(newText)}
            ></TextInput>

            <View style={styles.MarginViewSide}>
                <TouchableOpacity
                style={styles.Button}
                onPress = {() => contato()}
                ><Text style={styles.Text}>Salvar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.Button}
                onPress = {() => setState(!state)}
                ><Text style={styles.Text}>Contatos</Text>
                </TouchableOpacity>
            </View>


                <Modal
                visible={state}
                animationType="fade"
                transparent={true}
                >
                    <View style={styles.ModalStyle}>

                    <View style={styles.MarginView}>
                    <Text style={styles.Text}>Contatos</Text>   
                    </View>
                    

                    <FlatList
                    data={data}
                    renderItem={({item}) => <Text style={styles.Item}>{item}</Text>}
                    >

                    </FlatList>

                    <View style={styles.MarginViewSide}>
                        <TouchableOpacity
                        style={styles.Button}
                        onPress = {() => setState(false)}
                        ><Text style={styles.Text}>Fechar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={styles.Button}
                        onPress = {() => Limpa()}
                        ><Text style={styles.Text}>Limpar</Text>
                        </TouchableOpacity>
                    </View>

                    </View>
                    </Modal>

                <Modal
                visible={stateHelp}
                animationType="fade"
                transparent={true}
                >
                    <View style={styles.ModalStyleAjuda}>

                    <View style={styles.MarginViewLast}>
                        <TouchableOpacity
                        style={styles.Button}
                        onPress = {() => setStateHelp(false)}
                        ><Text style={styles.Text}>Fechar</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.TextLogin}>Ao clicar em "Ligar" seus contatos de emergência serão notificados e você entrará imediatamente na fila do 188 (Centro de Valorização da Vida)</Text>

                    <View style={styles.MarginViewLast}>
                        <TouchableOpacity
                        style={styles.ButtonEmergencyPopUp}
                        onPress = {() => setStateHelp(false)}
                        ><Text style={styles.TextEmergency}>Ligar</Text>
                        </TouchableOpacity>
                    </View>

                    </View>
                </Modal>

        </View>
    );
}
