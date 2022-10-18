import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { publicNavigations } from './src/navigations/navigations'

const Stack = createNativeStackNavigator();

import DefaultLayout from './src/layouts/DefaultLayout';

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Login'
                screenOptions={{
                    headerShown: false
                }}>
                {publicNavigations.map((navigation, index) => {
                    const Screen = navigation.screen;
                    let Layout = DefaultLayout;

                    if (navigation.layout) {
                        Layout = navigation.layout;
                    } else if (navigation.layout === null) {
                        Layout = Fragment;
                    }

                    const FullPage = () => {
                        return (
                            <Layout>
                                <Screen />
                            </Layout>
                        )
                    }

                    // const Guard = navigation.guard || Fragment;

                    return (
                        <Stack.Screen
                            key={index}
                            name={navigation.name}
                            component={
                                FullPage
                            }
                        />
                    );
                })}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
});
