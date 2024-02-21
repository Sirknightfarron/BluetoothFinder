import { StyleSheet, View } from "react-native";
import { ReactNode } from "react";
import { colors } from "../constants";
import Content from "./Content";

type BaseScreenProps = {
    children: ReactNode,
    route: any,
    style?: {}
}

/**
 *  Base Screen for easier formatting of their content
 * 
 * @param style custom style for base Screen 
 * 
 */
const BaseScreen = ({ children, route, style }: BaseScreenProps) => {
    const props = route.props;
    return (
        <View style={
            style === undefined ?
                styles.baseContainer :
                style
        }>
            <Content >{children}</Content>
        </View>
    );
}

const styles = StyleSheet.create({
    baseContainer: {
        flex: 1,
        backgroundColor: colors.Background,
        fontFamily: 'Barlow',
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        width: '100%'
    }
})

export default BaseScreen;