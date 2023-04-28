import { StyleSheet, View } from "react-native"
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

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
        backgroundColor:"#C4C4C4"
    }
})

export default Avatar;