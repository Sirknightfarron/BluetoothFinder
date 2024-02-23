import { useState, useEffect } from "react";
import { NativeModules, NativeEventEmitter, Platform, PermissionsAndroid } from "react-native";
import BleManager, { Peripheral } from "react-native-ble-manager";


/**
 * Custom hook for ble-manager returns 
 * @returns \{ discoveredDevices, connectedDevices, isScanning, setIsScanning, startScan, connectToPeripheral, disconnectFromPeripheral
    }
 */
const useBleSearch = () => {
    // Ble Manager tools
    const BleManagerModule = NativeModules.BleManager;
    const BleManagerEmitter = new NativeEventEmitter(BleManagerModule);
    const peripherals = new Map<string, Peripheral>();

    // useState
    const [connectedDevices, setConnectedDevices] = useState<Array<Peripheral>>([]);
    const [discoveredDevices, setDiscoveredDevices] = useState<Array<Peripheral>>([]);
    const [isScanning, setIsScanning] = useState<boolean>(false);

    //Functions
    const handleGetConnectedDevices = () => {
        BleManager.getConnectedPeripherals([])
            .then(results => {
                if (results.length === 0) {
                    console.log('No connected bluetooth devices found');
                } else {
                    for (let i = 0; i < results.length; i++) {
                        let peripheral = results[i];
                        peripherals.set(peripheral.id, peripheral);
                        setConnectedDevices(Array.from(peripherals.values()));
                    }
                }
            });
    };

    // connect to BT device
    const connectToPeripheral = (peripheral: Peripheral) => {
        BleManager.createBond(peripheral.id)
            .then(() => {
                peripherals.set(peripheral.id, peripheral);
                setConnectedDevices(Array.from(peripherals.values()));
                setDiscoveredDevices(Array.from(peripherals.values()));
                console.log('BT devices paired successfully');
            })
            .catch(() => {
                console.log('Failed to bond BT devices');
            });
    }
    // disconnect from BT device  
    // #TODO later for work for service technician?
    const disconnectFromPeripheral = (peripheral: Peripheral) => {
        BleManager.removeBond(peripheral.id)
            .then(() => {
                peripherals.set(peripheral.id, peripheral);
                setConnectedDevices(Array.from(peripherals.values()));
                setDiscoveredDevices(Array.from(peripherals.values()));
            })
            .catch(() => {
                console.log('Failed to un-bond');
            });
    };

    useEffect(() => {
        
        // // Promise where the os is asked wether it can enable BT, if successful console.log
        BleManager.enableBluetooth().then(() => {
            console.log("Bluetooth enabled!")
        })

        BleManager.start({ showAlert: true }).then(() => {
            console.log("Ble Manager Started successfully");
            handleGetConnectedDevices();
        })

        // Todo Call when one search is over
        let stopListener = BleManagerEmitter.addListener(
            'BleManagerStopScan',
            () => {
                setIsScanning(false);
                console.log('stopListener stopped scan!');
            },
        );

        let stopDiscoverListener = BleManagerEmitter.addListener(
            'BleManagerDiscoverPeripheral',
            (peripheral: Peripheral) => {
                peripherals.set(peripheral.id, peripheral);
                setDiscoveredDevices(Array.from(peripherals.values()));
            },
        );

        let stopConnectListener = BleManagerEmitter.addListener(
            'BleManagerConnectPeripheral',
            (peripheral: Peripheral) => {
                console.log('BleManagerConnectPeripheral:');
            },
        );

        let stopScanListener = BleManagerEmitter.addListener(
            'BleManagerStopScan',
            () => {
                setIsScanning(false);
                console.log('StopScanListener stopped scan!');
            },
        );

        return () => {
            stopDiscoverListener.remove();
            stopConnectListener.remove();
            stopScanListener.remove();
        };

    }, []) // end of useEffect

    // scan function [] array of devices to search for, empty is search for all
    // 5 secs as scan time, boolean for duplicates (ios only) 
    const startScan = () => {
        if (!isScanning) {
            BleManager.scan([], 5, true)
                .then(() => {
                    console.log('Scanning...');
                    setIsScanning(true);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    return {
        discoveredDevices,
        connectedDevices,
        isScanning,
        setIsScanning,
        startScan,
        connectToPeripheral,
        disconnectFromPeripheral
    }

}

export default useBleSearch;