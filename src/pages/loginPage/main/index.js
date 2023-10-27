import React, {useState} from "react";
import { View, KeyboardAvoidingView } from "react-native"
import Title from "../title";
import Login from "../login";
import Logo from "../logo";
import LoginSocial from "../loginSocial";

export default function Main({navigation}){

    return(
        <KeyboardAvoidingView
        behavior="position"
        >
            <Logo></Logo>
            <Title></Title>
            <Login></Login>
            <LoginSocial
            navigation={navigation}
            ></LoginSocial>
        </KeyboardAvoidingView>
    );
}