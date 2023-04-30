import { StyleSheet, Text, View } from "react-native"
import Avatar from "../components/Avatar";
import { PRIMARY_BACKGROUND_COLOR, PRIMARY_TEXT_COLOR } from "../styles/colors";
import Button from "../components/Button";
import { BOTTOM_BUTTON_BOTTOM, BOTTOM_BUTTON_LEFT } from "../styles/positions";

const SetUserAvatar = () => {
    return (
        <View style={styles.container}>
            <Avatar />
            <Text style={styles.text}>By tapping the arrow below, you agree to ParkFinder’s Terms of Use and acknowledge that you have read the Privacy Policy</Text>
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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: PRIMARY_BACKGROUND_COLOR,
        gap: 50
    },
    text: {
        fontSize: 20,
        color: PRIMARY_TEXT_COLOR
    },
    buttonContainer: {
        position: 'absolute',
        bottom:BOTTOM_BUTTON_BOTTOM,
        left:BOTTOM_BUTTON_LEFT
      },
})

export default SetUserAvatar;