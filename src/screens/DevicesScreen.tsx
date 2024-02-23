import { FlatList, StyleSheet, Text, View, } from "react-native";
import { useState } from "react";
import BaseScreen from "../components/BaseScreen";
import BaseButton from "../components/BaseButton";
import DeviceListItem from "../components/DeviceListItem";
import { Peripheral } from "react-native-ble-manager";
import { DevicesScreenProps } from "../types";
import Content from "../components/Content";
import useBleSearch from "../hooks/useBleSearch";
import { Colors } from "../constants";


const DevicesScreen = ({ route, navigation }: DevicesScreenProps) => {
    const [selectedId, setSelectedId] = useState<string>();

    const handleSelect = (item: Peripheral): void => {
        setSelectedId(item.id)
    }
    const {
        discoveredDevices,
        connectedDevices,
        startScan,
        connectToPeripheral,
        disconnectFromPeripheral } = useBleSearch()

    const handleSearch = () => {
        startScan();
    }
    const renderItem = ({ item }: { item: Peripheral }) => (
        <DeviceListItem
            item={item}
            onPress={handleSelect}
            selected={selectedId === item.id}
        />
    )

    return (
        <BaseScreen route={route}>
            <Content>
                <Text style={styles.devicesText}>Entdeckte Geräte: {discoveredDevices.length}</Text>
                <View style={styles.flatListWrapper}>
                    <FlatList
                        scrollEnabled={true}
                        data={discoveredDevices}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        style={styles.flatListStyle}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <BaseButton
                        buttonText="Suchen"
                        hitSlop={50}
                        onPress={handleSearch}
                    />
                </View>
            </Content>
        </BaseScreen>
    );
}
export default DevicesScreen;

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        paddingTop: 20,
        justifyContent: 'flex-end',
        height: '10%'
    },
    devicesText: {
        color: Colors.Grey,
        fontSize: 16,
        lineHeight: 18,
        fontWeight: 'bold',
        padding: 5
    },
    flatListStyle: {
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.Grey,
    },
    flatListWrapper: {
        height: '80%'
    }
});