import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    textLogin: {
        color: "#000000",
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        paddingTop:30
      },
      stretch: {
        width: 62,
        height: 62,
      },
      row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop:"7%"
      },
      touchable: {
        alignItems: 'center',
        justifyContent: 'center'
      },
      view:{
        padding:"5%"
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
      TextCadastro:{
        fontSize:16,
        color:"#2F89FA",
        textDecorationLine: 'underline',
      }

})

export default styles