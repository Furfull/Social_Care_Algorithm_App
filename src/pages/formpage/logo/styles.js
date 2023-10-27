import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  boxTitle: {
    justifyContent:"center",
    flexDirection: 'row',
    flexWrap: 'wrap'
},
stretch1: {
    height:160,
    width:30,
    marginLeft:"7%"
},
stretch2: {
    height:80,
    width:20,
    marginRight:"7%"
},
stretch: {
    width: 120,
    height: 120,
    resizeMode: 'stretch',
    alignItems:"center",
    justifyContent:"center",
    marginHorizontal:"18%",
    marginTop:"20%",
    marginBottom:"5%",
}  
})

export default styles