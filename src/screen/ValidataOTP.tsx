import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainTextInput from "../components/MainTextInput";

interface props{
    mobileNumber:string
}

const ValidateOTP:React.FC<props> = ({mobileNumber}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter the 4-digit code sent to you at </Text>
            <Text style={styles.mobileNumber}>{mobileNumber}</Text>
            <View style={styles.inputContainer}>
                <MainTextInput placeholder="0" placeholderTextColor={"#979797"} style={styles.input}/>
                <MainTextInput placeholder="0" placeholderTextColor={"#979797"} style={styles.input}/>
                <MainTextInput placeholder="0" placeholderTextColor={"#979797"} style={styles.input}/>
                <MainTextInput placeholder="0" placeholderTextColor={"#979797"} style={styles.input}/>
            </View>
            <Text style={styles.resend}>Resend Code</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#1A1A1A"
    },
    title:{
        fontSize:24,
        color:"#EDF6FF"
    },
    mobileNumber:{
        fontSize:20,
        color:"#EDF6FF"
    },
    inputContainer:{
        flexDirection:"row",
        gap:10,
    },
    input:{
        width:"15%",
        textAlign:"center",
        color:"#EDF6FF",
    },
    resend:{
        color:"#535AFF",
        marginTop:20,
        fontSize:18,
    }
})

export default ValidateOTP;