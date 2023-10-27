import React from "react";
import { ScrollView } from 'react-native-virtualized-view'
import Title from "../title";
import Fields from "../fields";
import Charts from "../charts";


export default function MainProfile(){
    return(
        <ScrollView>
            <Title></Title>
            <Charts></Charts>
        </ScrollView>
    );
}