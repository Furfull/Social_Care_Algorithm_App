import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    MarginLogo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        width:"90%",
        borderTopWidth: 1,
        marginLeft:"4%",
        marginTop:"1%"
    },
    MarginLogoBody: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        width:"90%",
        marginLeft:"4%"
    },
    TextEsqueciMinhaSenha:{
        fontSize:15,
        color:"#2F89FA",
        textDecorationLine: 'underline',
        paddingTop:"7%"
    },
    MarginView:{
        paddingTop:"2%",
        alignItems:"center",
        justifyContent:"center",
    },
    chart: {
        paddingHorizontal: "4%",
        backgroundColor: '#DCDCDC',
        borderBottomColor: "#DCDCDC",
        borderBottomWidth:1
      }
})

export default styles