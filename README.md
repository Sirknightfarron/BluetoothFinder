This is a [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## BluetoothFinder

This App was a Coding Challenge to make an App that lists all Bluetooth devices in your Android devices surroundings.
The time Limit was 5 Days and I used a Framework that I haven't used before. I got some Information about how it should
look like and for whom the app is, the rest was up to me.
I used Reactnative and Typescript. For the bluetooth i used Bluetooth Low Energy manager for Reactnative and the devices
Bluetooth emitter.

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

This is part of the standart Readme React sets up.

## Using the App

The app is designed for Technicians to connect to BT Devices and configure those afterwards.
The Landing Page is simple and only has an additional Info Box, depending on what special inquiries the Job at that day brings.
The second Page is the Devcices List with a Button to start the search. The List Items tell the Name and Mac address of the
Devices. Each Item is clickable to send the User to the configuration Page.
Its as simple as that.

#TODO finish UI and fix small bugs and the rest of the Typescript warnings.
#TODO Add single functionality to rename your BT device.
