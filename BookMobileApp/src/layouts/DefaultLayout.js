import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';

import Header from '../layouts/components/Header'
import Footer from '../layouts/components/Footer'

export default function DefaultLayout({ children }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.content}>{children}</View>
            <Footer />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
});
