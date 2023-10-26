import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    TextLogin: {
        fontSize:16,
        fontWeight:"bold",
        paddingLeft:"6%",
        marginVertical:"10%"
    },
    InputCadastro: {
        alignItems:"center",
        justifyContent:"center",
        width:"70%",
        borderRadius:15,
        borderWidth:1,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:"2%",
        fontSize:18,
        fontWeight:"bold",
        paddingLeft:70,
        color: "#000000",
    },
    MarginView:{
        paddingTop:"2%",
        alignItems:"center",
        justifyContent:"center",
    },
    MarginViewLast:{
        paddingTop:"1%",
        alignItems:"center"
    },
    MarginViewSide:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop:"2%",
        marginBottom:"10%"
    },
    Button:{
        borderRadius:15,
        alignItems:"center",
        width:"40%",
        backgroundColor:"#608EA9",
        paddingTop:"3%",
        paddingBottom:"3%",
        marginHorizontal:"5%"
    },
    ButtonEmergency:{
        borderRadius:15,
        alignItems:"center",
        width:"30%",
        backgroundColor:"red",
        paddingTop:"3%",
        paddingBottom:"3%",
        margin:"2%"
    },
    ButtonEmergencyPopUp:{
        borderRadius:15,
        alignItems:"center",
        width:"40%",
        backgroundColor:"red",
        paddingTop:"5%",
        paddingBottom:"5%"
    },
    Text:{
        alignItems:"center",
        justifyContent:"center",
        fontSize:18,
        color:"#000000",
        fontWeight:"bold",
    },
    TextEmergency:{
        alignItems:"center",
        justifyContent:"center",
        fontSize:18,
        color:"white",
        fontWeight:"bold",
    },
    TextEmergencyBody:{
        alignItems:"center",
        justifyContent:"center",
        fontSize:18,
        color:"white",
        fontWeight:"bold",
        marginVertical:"10%"
    },
    Item: {
      padding: "1%",
      fontSize: 18,
      margin:"1%",
      height: 55,
      backgroundColor: '#ffffff',
      borderRadius:15,
      borderWidth:1
    },
    ModalStyle:{
        width:"50%",
        height:"40%",
        backgroundColor: '#ffffff',
        marginTop:"50%",
        marginLeft:"25%",
        opacity:0.95,
        borderRadius:15,
        borderWidth:1,
    },
    ModalStyleAjuda:{
        width:"50%",
        height:"30%",
        backgroundColor: '#ffffff',
        marginTop:"50%",
        marginLeft:"25%",
        opacity:0.95,
        borderRadius:15,
        borderWidth:1,
    }

})

export default styles