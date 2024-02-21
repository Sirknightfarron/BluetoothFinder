import { Pressable, Text, View } from "react-native";

type DeviceListItemProps = {
    info: {
        deviceName: String;
        rssid: String;
    };
    style: {};
    onPress: () => void;
}

const DeviceListItem = ({ info, style, onPress }: DeviceListItemProps) => {
    return (
        <Pressable
            style={style}
            onPress={onPress}>
            <View>
                <Text>{info.deviceName}</Text>
                <Text>{info.rssid}</Text>
            </View>
        </Pressable>
    );
}

export default DeviceListItem;