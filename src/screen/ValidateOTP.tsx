import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainTextInput from "../components/MainTextInput";
import { HINT_TEXT_COLOR, PLACEHOLDER_TEXT_COLOR, PRIMARY_BACKGROUND_COLOR, PRIMARY_TEXT_COLOR } from "../styles/colors";
import Button from "../components/Button";
import { BOTTOM_BUTTON_BOTTOM, BOTTOM_BUTTON_LEFT } from "../styles/positions";

const ValidateOTP = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter the 4-digit code sent to you at </Text>
            <Text style={styles.mobileNumber}>+94 758964855</Text>
            <View style={styles.inputContainer}>
                <MainTextInput placeholder="0" placeholderTextColor={PLACEHOLDER_TEXT_COLOR} style={styles.input} />
                <MainTextInput placeholder="0" placeholderTextColor={PLACEHOLDER_TEXT_COLOR} style={styles.input} />
                <MainTextInput placeholder="0" placeholderTextColor={PLACEHOLDER_TEXT_COLOR} style={styles.input} />
                <MainTextInput placeholder="0" placeholderTextColor={PLACEHOLDER_TEXT_COLOR} style={styles.input} />
            </View>
            <Text style={styles.resend}>Resend Code</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title='Next'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY_BACKGROUND_COLOR
    },
    title: {
        fontSize: 24,
        color: PRIMARY_TEXT_COLOR
    },
    mobileNumber: {
        fontSize: 20,
        color: PRIMARY_TEXT_COLOR
    },
    inputContainer: {
        flexDirection: "row",
        gap: 10,
    },
    input: {
        width: "15%",
        textAlign: "center",
        color: PRIMARY_TEXT_COLOR,
    },
    resend: {
        color: HINT_TEXT_COLOR,
        marginTop: 20,
        fontSize: 18,
    },
    buttonContainer: {
        position: 'absolute',
        bottom:BOTTOM_BUTTON_BOTTOM,
        left:BOTTOM_BUTTON_LEFT
      },
})

export default ValidateOTP;