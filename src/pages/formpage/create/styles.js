import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    TextLogin: {
        fontSize:16,
        fontWeight:"bold",
        paddingHorizontal:"5%"
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
        paddingTop:"0%",
    },
    button:{
        borderRadius:15,
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
      ModalStyleAjuda:{
        width:"60%",
        height:"50%",
        backgroundColor: '#ffffff',
        marginTop:"50%",
        marginHorizontal:"20%",
        opacity:0.95,
        borderRadius:15,
        borderWidth:1,
    },
    MarginViewLast:{
        paddingTop:"1%",
        alignItems:"center"
    },
    Button:{
        borderRadius:15,
        borderWidth:1,
        alignItems:"center",
        width:"60%",
        backgroundColor:"#608EA9",
        paddingTop:"3%",
        paddingBottom:"3%",
        marginHorizontal:"5%",
        marginVertical:"2%"
    },
    TextCadastro:{
        fontSize:16,
        color:"#2F89FA",
        textDecorationLine: 'underline',
      }
})

export default styles