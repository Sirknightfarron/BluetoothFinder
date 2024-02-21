import { FlatList, StyleSheet, Text, View } from "react-native";
import BaseScreen from "../components/BaseScreen";
import { LandingScreenProps } from "../types";
import Content from "../components/Content";
import BaseButton from "../components/BaseButton";


const LandingScreen = ({ route, navigation }: LandingScreenProps) => {
    const handleButtonPress = () => {
        navigation.navigate('Devices');
    }

    return (
        <BaseScreen route={route} style={styles.baseStyles}>
            <View>
                <Text>Heading</Text>
            </View>
            <Content>
                <Text>Das hier soll man sehen</Text>
            </Content>
            <View>
                <Text>Hier dann Buttons</Text>
                <BaseButton
                    buttonText="Search BT Devices"
                    hitSlop={50} 
                    onPress={handleButtonPress} 
                ></BaseButton>
            </View>
        </BaseScreen>
    );
}

const styles = StyleSheet.create({
    baseStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
});

export default LandingScreen;