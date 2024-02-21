import type { RouteProp, NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
    Landing: undefined;
    Devices: undefined;
}

// define navigation properties
type LandingScreenNavigationProp = NavigationProp<RootStackParamList, 'Landing'>;
type DevicesScreenNavigationProp = NavigationProp<RootStackParamList, 'Devices'>;

// define route properties
type LandingScreenRouteProp = RouteProp<RootStackParamList, 'Landing'>;
type DevicesScreenRouteProp = RouteProp<RootStackParamList, 'Devices'>;

// the combined screen properties
export type LandingScreenProps = {
    route: LandingScreenRouteProp,
    navigation: LandingScreenNavigationProp
}

export type DevicesScreenProps = {
    route: DevicesScreenRouteProp;
    navigation: DevicesScreenNavigationProp;
}