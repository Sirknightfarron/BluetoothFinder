import { View } from "react-native";
import BaseScreen from "../components/BaseScreen";
import { DevicesScreenProps } from "../types";
import BaseButton from "../components/BaseButton";


const DevicesScreen = ({ route, navigation }: DevicesScreenProps) => {
    const handleBackButtonPress = () => {
        if (navigation.canGoBack()) {
            navigation.goBack()
        }
    }

    return (
        <BaseScreen route={route}>
            <View></View>
            <BaseButton
                buttonText="Back"
                hitSlop={50}
                onPress={handleBackButtonPress}
            >
            </BaseButton>
        </BaseScreen>
    );
}

export default DevicesScreen;