import { StyleSheet, View } from "react-native"
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { SECONDARY_BACKGROUND_COLOR } from "../styles/colors";

const Avatar = ()=>{
    return(
        <View style={styles.container}>
            <FontAwesomeIcon icon={faUser} size={90}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        width:140,
        height:140,
        borderRadius:70,
        backgroundColor:SECONDARY_BACKGROUND_COLOR
    }
})

export default Avatar;