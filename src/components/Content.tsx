import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type ContentProps = {
    children: ReactNode;
    style?: {}
}

const Content = ({ children, style }: ContentProps) => {
    return (
        <View style={
            style === undefined ?
                styles.baseContainer :
                style
        }>
            { children }
        </View>
    );
}

const styles = StyleSheet.create({
    baseContainer: {
        flex: 1,
        padding: 5
    }
})

export default Content;