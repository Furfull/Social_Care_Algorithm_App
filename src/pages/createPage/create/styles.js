import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    TextLogin: {
        fontSize:16,
        fontWeight:"bold",
        paddingLeft:"5%"
    },
    InputLogin: {
        width:"90%",
        borderRadius:15,
        borderWidth:1,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:"3%",
        paddingLeft:15,
    },
    TextEsqueciMinhaSenha:{
        fontSize:15,
        color:"#2F89FA",
        textDecorationLine: 'underline',
        paddingLeft:"33%"
    },
    MarginView:{
        paddingTop:"10%",
    },
    button:{
        borderRadius:15,
        borderWidth:1,
        alignItems:"center",
        width:"90%",
        backgroundColor:"#608EA9",
        paddingTop:"3%",
        paddingBottom:"3%",
        margin:"4.6%"
      },
      buttonText:{
        color: "#000000",
        fontSize:22,
        fontWeight:"bold",
      },
})

export default styles