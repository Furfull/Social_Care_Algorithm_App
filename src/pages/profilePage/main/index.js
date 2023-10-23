import React from "react";
import { ScrollView } from 'react-native-virtualized-view'
import Title from "../title";
import Fields from "../fields";


export default function (){
    return(
        <ScrollView>
            <Title></Title>
            <Fields></Fields>
        </ScrollView>
    );
}