import React from "react";
import { View, ScrollView, RefreshControl } from "react-native"
import Notification from "../notification"

export default function MainNotification(){

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
        setRefreshing(false);
        }, 2000);
    }, []);

    data = [{id:1, date:"20-10-2023", message:"teste "}, 
    {id:2, date:"21-10-2023", message:"teste "},
    {id:3, date:"21-10-2023", message:"teste "},
    {id:5, date:"21-10-2023", message:"teste "},
    {id:6, date:"21-10-2023", message:"teste "},
    {id:7, date:"21-10-2023", message:"teste ja"},
    {id:8, date:"21-10-2023", message:"teste "},
    {id:4, date:"21-10-2023", message:"teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste "}
]

    return(
        <ScrollView
        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
            {
                data.reverse().map((item) => {
                    return <Notification  key={item.id} data={item}/>
                }) 
            }
        </ScrollView>
    );
}