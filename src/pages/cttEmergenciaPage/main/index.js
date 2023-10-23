import React from "react";
import { View, ScrollView } from "react-native"
import Title from "../title";
import Logo from "../logo"
import Body from "../body"
import CreateContact from "../createContact"

export default function MainContatos(){
    return(
        <ScrollView>
            <Title></Title>
            <Logo></Logo>
            <Body></Body>
            <CreateContact></CreateContact>
        </ScrollView>
    );
}