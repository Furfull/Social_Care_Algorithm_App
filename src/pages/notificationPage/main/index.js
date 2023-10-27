import React, {useState} from "react";
import { View, ScrollView, RefreshControl } from "react-native"
import Notification from "../notification"
import Getter from "../../../service/service"

export default function MainNotification(){

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
        setRefreshing(false);
        }, 2000, getRespose());
    }, []);

    const [dataList, setDataList] = useState([{ id: 2, date: 'ATUALIZE:', text: 'Atualize para ver suas notificações', user_id: 1 }])
    
    async function getRespose() {
        const request = await Getter()
        setDataList(request)
        return request
    }
     
    return(
        <ScrollView
        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
                {dataList.map((item) => {
                    return <Notification  key={item.id} data={item}/>
                }).reverse()}
                
        </ScrollView>
    );
}