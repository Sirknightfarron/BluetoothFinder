import { StyleProp, StyleSheet, View } from "react-native";
import { ReactNode } from "react";
import { Colors } from "../constants";
import LinearGradient from "react-native-linear-gradient";

type BaseScreenProps = {
    children: ReactNode,
    route: any,
    style?: StyleProp<StyleMedia>
}

/**
 *  Base Screen for easier formatting of their content
 * 
 * @param style custom style for base Screen 
 * 
 */
const BaseScreen = ({ children, route, style }: BaseScreenProps) => {
    return (
        <LinearGradient
            colors={[Colors.Yellow, Colors.Yellow, Colors.Background, Colors.Background, Colors.Background]}
            start={{ x: 0.1, y: 0.45 }}
            end={{ x: 1, y: 1 }}
            style={styles.linearGradient}>
            <View style={style === undefined ? styles.baseContainer : style}>
                {children}
            </View>
        </LinearGradient>
    );
}
export default BaseScreen;

const styles = StyleSheet.create({
    baseContainer: {
        flex: 1,
        //backgroundColor: Colors.Background,
        fontFamily: 'Roboto',
        borderWidth: 1,
        justifyContent: 'space-between',
        alignContent: 'flex-end',
        width: '100%',
        height: '100%',
        padding: 5
    },
    linearGradient: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
})
