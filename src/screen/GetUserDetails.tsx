import { StyleSheet, Text, View } from "react-native"
import MainTextInput from "../components/MainTextInput";

const GetUserDetails = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>What’s your name?</Text>
            <View style={styles.inputContainer}>
            <MainTextInput placeholder="First" placeholderTextColor={"#979797"} style={styles.input}/>
            <MainTextInput placeholder="Last" placeholderTextColor={"#979797"} style={styles.input}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A1A1A"
    },
    title:{
        fontSize:24,
        color:"#EDF6FF"
    },
    inputContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    input:{
        width:"45%",
        color:"#EDF6FF",
    }
})

export default GetUserDetails;