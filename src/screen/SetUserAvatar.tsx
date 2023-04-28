import { StyleSheet, Text, View } from "react-native"
import Avatar from "../components/Avatar";

const SetUserAvatar = ()=>{
    return(
        <View style={styles.container}>
            <Avatar/>
            <Text style={styles.text}>By tapping the arrow below, you agree to ParkFinder’s Terms of Use and acknowledge that you have read the Privacy Policy</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#1A1A1A",
        gap:50
    },
    text:{
        fontSize:20,
        color:"#EDF6FF"
    }
})

export default SetUserAvatar;