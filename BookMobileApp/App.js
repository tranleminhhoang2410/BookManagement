import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import DefaultLayout from './src/layouts/DefaultLayout';

export default function App() {
    return (
        <DefaultLayout>
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <StatusBar style="auto" />
            </View>
        </DefaultLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
