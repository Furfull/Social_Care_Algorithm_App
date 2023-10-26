import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    View:{
        color: "#white",
        width:"95%",
        height: "10%",
        margin:"2%",
        backgroundColor:"white",
        borderWidth:1,
        borderRadius:15,
        borderBottomWidth:4,
        borderRightWidth:4,
        borderRadius:10,
        borderColor: 'rgba(158, 150, 150, .3)',
    },
    ViewCenter:{
        alignContent:"center",
        justifyContent:"center"
    },
    TextName:{
        fontSize:16,
        fontWeight:"bold",
        paddingLeft:"1%",
    },
    TextNameUser:{
        fontSize:16,
        paddingTop:"1%",
        paddingLeft:"3%"
    },
    textTitleBody:{
        color: "#000000",
        fontSize:18,
        alignItems:"center",
        textAlign:"center",
        width:"95%",
        paddingBottom:"3%"
    },
    Button:{
        borderRadius:10,
        alignItems:"center",
        width:"90%",
        backgroundColor:"#608EA9",
        paddingTop:"3%",
        paddingBottom:"3%",
        marginHorizontal:"5%",
        
    },
})

export default styles