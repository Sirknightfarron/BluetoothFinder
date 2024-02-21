import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type BaseButtonProps = {
    onPress: () => void;
    buttonText: string;
    style?: any;
    hitSlop: number;
}

// cstyle: custom style - might refactor later
const BaseButton = ({ onPress, buttonText, style, hitSlop }: BaseButtonProps) => {
    return (
        <View style={style === undefined ? styles.buttonContainer : style}>
            <Pressable onPress={onPress} hitSlop={hitSlop} >
                <Text style={styles.buttonTitle}>{buttonText}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth: 2,
        padding: 5,
    },
    buttonTitle: {
        fontFamily: 'Barlow',
        fontWeight: 'bold',
    },
    buttonStyle: {
        borderWidth: 2,
        padding: 5,
    },
})

export default BaseButton;