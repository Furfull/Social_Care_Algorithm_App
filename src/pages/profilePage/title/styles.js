import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    boxTitle: {
        justifyContent:"center",
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    textTitle:{
        color: "#000000",
        fontSize:20,
        textAlign:"center",
        paddingTop:"10%",
        paddingBottom:"10%",
        width:"105%"
    },
    stretch1: {
        height:160,
        width:30,
        marginLeft:"5%"
    },
    stretch2: {
        height:80,
        width:20,
        marginRight:"5%"
    },
    stretch: {
        width: 110,
        height: 110,
        resizeMode: 'stretch',
        alignItems:"center",
        backgroundColor:"#FF7F00",
        borderRadius:200,
        margin:"3%",
        marginLeft:"35%",
    },
    TextName:{
        color: "#000000",
        fontSize:18,
        paddingRight:"58%",
        fontWeight:"bold"
    },
    TextNameUser:{
        color: "#000000",
        fontSize:18,
        paddingRight:"35%",
        paddingTop:"2%"
    }
})

export default styles