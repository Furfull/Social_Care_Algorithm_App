import React from "react";
import { ScrollView, View, KeyboardAvoidingView } from "react-native"
import Logo from "../logo";
import Creation from "../create";

export default function Main({navigation}){
    return(
        <KeyboardAvoidingView
        behavior="position"
        >
            <ScrollView>
            <Logo></Logo>
            <Creation
            navigation={navigation}
            ></Creation>                
            </ScrollView>

        </KeyboardAvoidingView>
    );
}