import { StyleSheet, Text, View } from "react-native"
import Avatar from "../components/Avatar";
import { PRIMARY_BACKGROUND_COLOR, PRIMARY_TEXT_COLOR } from "../utils/colors";

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
        backgroundColor:PRIMARY_BACKGROUND_COLOR,
        gap:50
    },
    text:{
        fontSize:20,
        color:PRIMARY_TEXT_COLOR
    }
})

export default SetUserAvatar;