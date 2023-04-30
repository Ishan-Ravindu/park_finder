import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainTextInput from "../components/MainTextInput";
import { HINT_TEXT_COLOR, PLACEHOLDER_TEXT_COLOR, PRIMARY_BACKGROUND_COLOR, PRIMARY_TEXT_COLOR } from "../utils/colors";

interface props{
    mobileNumber:string
}

const ValidateOTP:React.FC<props> = ({mobileNumber}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter the 4-digit code sent to you at </Text>
            <Text style={styles.mobileNumber}>{mobileNumber}</Text>
            <View style={styles.inputContainer}>
                <MainTextInput placeholder="0" placeholderTextColor={PLACEHOLDER_TEXT_COLOR} style={styles.input}/>
                <MainTextInput placeholder="0" placeholderTextColor={PLACEHOLDER_TEXT_COLOR} style={styles.input}/>
                <MainTextInput placeholder="0" placeholderTextColor={PLACEHOLDER_TEXT_COLOR} style={styles.input}/>
                <MainTextInput placeholder="0" placeholderTextColor={PLACEHOLDER_TEXT_COLOR} style={styles.input}/>
            </View>
            <Text style={styles.resend}>Resend Code</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:PRIMARY_BACKGROUND_COLOR
    },
    title:{
        fontSize:24,
        color:PRIMARY_TEXT_COLOR
    },
    mobileNumber:{
        fontSize:20,
        color:PRIMARY_TEXT_COLOR
    },
    inputContainer:{
        flexDirection:"row",
        gap:10,
    },
    input:{
        width:"15%",
        textAlign:"center",
        color:PRIMARY_TEXT_COLOR,
    },
    resend:{
        color:HINT_TEXT_COLOR,
        marginTop:20,
        fontSize:18,
    }
})

export default ValidateOTP;