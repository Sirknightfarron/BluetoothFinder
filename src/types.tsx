import type { RouteProp, NavigationProp } from '@react-navigation/native';
import { Peripheral } from 'react-native-ble-manager/dist/esm/types';

export type RootStackParamList = {
    Landing: {
        route: LandingScreenRouteProp;
        navigation: LandingScreenNavigationProp
    };
    Devices: undefined;
}

export type DeviceItemProp = {
    item: Peripheral;
}

// define navigation properties
type LandingScreenNavigationProp = NavigationProp<RootStackParamList, 'Landing'>;
type DevicesScreenNavigationProp = NavigationProp<RootStackParamList, 'Devices'>;

// define route properties
type LandingScreenRouteProp = RouteProp<RootStackParamList, 'Landing'>;
type DevicesScreenRouteProp = RouteProp<RootStackParamList, 'Devices'>;

// the combined screen properties
export type LandingScreenProps = {
    route: LandingScreenRouteProp;
    navigation: LandingScreenNavigationProp;
    style?: {};
}

export type DevicesScreenProps = {
    route: DevicesScreenRouteProp;
    navigation: DevicesScreenNavigationProp;
}