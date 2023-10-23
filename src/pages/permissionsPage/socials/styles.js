import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    boxTitle: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    TextLogo:{
        color: "#000000",
        fontSize:22,
        width:"40%",
        paddingLeft:"3%",
        paddingTop:"4%"
    },
    Logo: {
        height:50,
        width:50,
        marginLeft:"5%",
        margin:"2%"
    },
    MarginLogo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        width:"90%",
        borderTopWidth: 1,
        marginLeft:"5%"
    },
    MarginLogoBody: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        width:"90%",
        marginLeft:"5%"
    },
    Switch:{
        height:50,
        width:50,
        marginLeft:"20%",
        paddingTop:"5%",
        transform: [{ scaleX:  (10, 1.2) }, { scaleY:  
            (5, 1.2) }]
    }
})

export default styles