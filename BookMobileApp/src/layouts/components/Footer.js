import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BooksScreen from '../../screens/BooksScreen'
import AuthorsScreen from '../../screens/AuthorsScreen'
import PublishersScreen from '../../screens/PublishersScreen'
import UserScreen from '../../screens/UserScreen'

const Tab = createBottomTabNavigator();
export default function Footer() {
    return (
        <Tab.Navigator style={styles.bottom} screenOptions={{ headerShown: false }}>
            <Tab.Screen name='Books' component={BooksScreen} />
            <Tab.Screen name='Authors' component={AuthorsScreen} />
            <Tab.Screen name='Publishers' component={PublishersScreen} />
            <Tab.Screen name='Me' component={UserScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    bottom: {
        backgroundColor: 'red',
    }
})
