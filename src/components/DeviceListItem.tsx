import {
    Pressable,
    StyleSheet, Text, View
} from "react-native";
import { Peripheral } from "react-native-ble-manager";
import { Colors } from "../constants";
import React, { memo } from "react";


type DeviceListItemProps = {
    selected: boolean;
    item: Peripheral;
    onPress: (item: Peripheral) => void;
}

/**
 * List Item for the devices Screen containing relevant information
 */
const DeviceListItem = ({ onPress, item, selected }: DeviceListItemProps) => {
    return (
        <Pressable
            hitSlop={50}
            onPress={() => onPress(item)}
            style={
                [styles.devicePressable, selected && styles.selectedItem]
            }>
            <View>
                <Text style={styles.peripheralText}>
                    <Text style={styles.nominator}>Geräte Name: </Text>{item.name === null ? 'Unbekannt' : item.name}
                </Text>
                <Text style={styles.peripheralText}>
                    <Text style={styles.nominator}>Adresse: </Text>{item.id}
                </Text>
            </View>
        </Pressable>
    );
}



export default DeviceListItem;

const styles = StyleSheet.create({
    devicePressable: {
        fontFamily: 'Roboto',
        color: Colors.Grey,
        backgroundColor: Colors.Background,
        borderBottomWidth: 1,
        padding: 8,
        alignItems: 'stretch',
    },
    selectedItem: {
        fontFamily: 'Roboto',
        color: Colors.Active,
        backgroundColor: Colors.Yellow,
        borderBottomWidth: 1,
        padding: 5,
    },
    peripheralText: {
        color: Colors.Grey
    },
    nominator: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    }
});