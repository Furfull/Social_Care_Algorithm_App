import React from "react";
import { View, ScrollView, RefreshControl } from "react-native"
import Notification from "../notification"
import * as service from "../../../service/service"

export default function MainNotification(){

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
        setRefreshing(false);
        }, 2000);
    }, []);

    const response = service.fecthUrl();

    console.log(response)

    data = [{id:1, date:"20-10-2023", message:"teste "}]

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