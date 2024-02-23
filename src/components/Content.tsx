import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../constants";

type ContentProps = {
    children: ReactNode;
    style?: {}
}

const Content = ({ children, style }: ContentProps) => {
    return (
        <View style={style === undefined ? styles.baseContainer : style}>
            { children }
        </View>
    );
}

const styles = StyleSheet.create({
    baseContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        width: '100%',
        justifyContent: 'space-around',
        color: Colors.Grey,
    }
})

export default Content;