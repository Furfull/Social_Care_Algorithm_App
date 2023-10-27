import React from "react";
import { ScrollView, View, KeyboardAvoidingView } from "react-native"
import Logo from "../logo";
import Creation from "../create";
import Fields from "../fields";

export default function CreateForm({navigation}){
    return(
        <KeyboardAvoidingView
        behavior="position"
        >
            <View>
            <Logo></Logo>
            <Fields></Fields>
            <Creation
            navigation={navigation}
            ></Creation>                
            </View>

        </KeyboardAvoidingView>
    );
}