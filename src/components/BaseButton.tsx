import React from "react";
import { Pressable, StyleProp, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants";

type BaseButtonProps = {
    onPress: (item: any) => void;
    buttonText: string;
    style?: {};
    hitSlop: number;
}

const BaseButton = ({ onPress, buttonText, style, hitSlop }: BaseButtonProps) => {
    return (
        <View style={style === undefined ? styles.buttonContainer : style}>
            <Pressable
                onPress={onPress}
                hitSlop={hitSlop} >
                <Text style={styles.buttonTitle}>{buttonText}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth: 2,
        borderColor: Colors.Grey,
        backgroundColor: Colors.Yellow,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        justifyContent: 'space-around',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.Grey,
        paddingHorizontal: '40%'
    },
})

export default BaseButton;