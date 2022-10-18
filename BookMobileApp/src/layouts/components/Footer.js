import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation } from 'react-native-paper';

import HomeScreen from '../../screens/HomeScreen'
import BooksScreen from '../../screens/BooksScreen'
import AuthorsScreen from '../../screens/AuthorsScreen'
import PublishersScreen from '../../screens/PublishersScreen'

export default function Footer() {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'home', title: 'Home', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
        { key: 'books', title: 'Books', focusedIcon: 'album' },
        { key: 'authors', title: 'Authors', focusedIcon: 'history' },
        { key: 'publishers', title: 'Publisher', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeScreen,
        books: BooksScreen,
        authors: AuthorsScreen,
        publishers: PublishersScreen,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            style={styles.bottom}
        />
    );
}

const styles = StyleSheet.create({
    bottom: {
        backgroundColor: ' red',
    }
})
