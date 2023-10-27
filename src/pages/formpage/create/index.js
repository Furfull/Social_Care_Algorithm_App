import React, {useState} from "react";
import { View, ScrollView, Text, TextInput, TouchableOpacity, Modal } from "react-native"
import styles from "./styles"


export default function Creation({navigation}){

    const [state, setState] = useState(false)

    return(
        <View style={styles.MarginView}>
            
            <View>

            <TouchableOpacity
            style={styles.button}
            onPress={()=> navigation.navigate('Login')}
            ><Text style={styles.buttonText}>Criar</Text>
            </TouchableOpacity>


            </View>
        </View>
    );
}