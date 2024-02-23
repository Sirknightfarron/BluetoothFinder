import {
    PermissionsAndroid,
    Platform,
    StyleSheet,
    Text,
    View,
} from "react-native";
import Content from "../components/Content";
import BaseButton from "../components/BaseButton";
import BaseScreen from "../components/BaseScreen";
import { LandingScreenProps } from "../types";
import { useEffect } from "react";
import { Colors } from "../constants";

const LandingScreen = ({ route, navigation, style }: LandingScreenProps) => {
    const infoText = `Mit dieser App können Sie Bluetooth Geräte in ihrer Nähe Finden und konfigurieren. Tippen Sie dafür auf den gesuchten Eintrag in der Liste auf der Folgenden Seite und beginnen Sie mit der Konfiguration.`
    const handleNextButtonPress = () => {
        navigation.navigate('Devices')
    }
    // first ask for permissions otherwise -> crash
    useEffect(() => {
        if (Platform.OS === 'android' && Platform.Version >= 23) {
            PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            ).then(result => {
                if (result) {
                    console.log('Permission like 200 OK');
                } else {
                    PermissionsAndroid.requestMultiple([
                        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
                        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    ]).then(result => {
                        if (result) {
                            console.log('User accepted!');
                        } else {
                            console.log('User refused!');
                        }
                    });
                }
            });
        }
    })

    return (
        <BaseScreen route={route}>
            <Content>
                <View style={styles.infoBoxWrapper}>
                    <Text style={styles.infoBox}>
                        {infoText}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <BaseButton
                        buttonText="Weiter"
                        hitSlop={50}
                        onPress={handleNextButtonPress}>
                    </BaseButton>
                </View>
            </Content>
        </BaseScreen>
    );
}

const styles = StyleSheet.create({
    content: {
        height: '85%',
        width: '100%',
    },
    buttonContainer: {
        width: '100%',
        paddingTop: 20,
        alignSelf: 'flex-end'
    },
    infoBox: {
        borderWidth: 1,
        borderColor: Colors.Grey,
        color: Colors.Grey,
        backgroundColor: Colors.Background,
        padding: 12,
        fontSize: 16,
        lineHeight: 18
    },
    infoBoxWrapper: {
        paddingTop: 120,
        height: '85%',
    }
});

export default LandingScreen;