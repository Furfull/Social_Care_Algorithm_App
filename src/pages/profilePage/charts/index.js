import React from "react";
import { View, Text, Image, Dimensions  } from "react-native";
import styles from "./styles";
import { ContributionGraph, PieChart} from "react-native-chart-kit";


export default function Charts(){

    const screenWidth = Dimensions.get("window").width;

    const commitsData = [
        { date: "2023-10-28", count: 100 },
        { date: "2023-10-27", count: 70 },
        { date: "2023-10-26", count: 10 },
        { date: "2023-10-25", count: 40 },
        { date: "2023-10-18", count: 30 },
        { date: "2023-10-08", count: 50 },
        { date: "2023-10-13", count: 60 },
        
      ];
    
      const dataPie = [
        {
          name: "neutral",
          population: 130,
          color: "#FFFACD",
          legendFontColor: "#000000",
          legendFontSize: 15
        },
        {
          name: "negative",
          population: 30,
          color: "#F08080",
          legendFontColor: "#000000",
          legendFontSize: 15
        },
        {
          name: "positive",
          population: 70,
          color: "#90EE90",
          legendFontColor: "#000000",
          legendFontSize: 15
        }
      ];

    return(
        <View >
            <Text>❗️Veja o mapa da sua contrbuição nas Razões Para Continuar:</Text>
            <ContributionGraph
            values={commitsData}
            endDate={new Date("2023-11-11")}
            numDays={105}
            width={screenWidth}
            height={220}
            chartConfig={{
                backgroundColor: "#fff",
                backgroundGradientToOpacity: 0.6,
                backgroundGradientFromOpacity: 0.5,
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#ffff',
                color: (opacity = 1) => `rgba(96, 142, 	169, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              }}
              style={styles.chart}
              
              ></ContributionGraph>

            <Text>❗️Veja a porcentagem do sentimento das suas postagens:</Text>
            <PieChart
              data={dataPie}
              width={screenWidth}
              height={230}
              chartConfig={{
                color: () => '#ffff',
                labelColor: () => '#ffff',
              }}
              accessor={"population"}
              backgroundColor={"#f0f0f0"}
              center={[14, 10]}
              style={styles.chart}
            />
        </View>
    );
}