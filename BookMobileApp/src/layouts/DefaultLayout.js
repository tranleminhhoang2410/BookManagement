import { StyleSheet, Text, SafeAreaView, StatusBar, View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';

export default function DefaultLayout({ children }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text>Header</Text>
            </View>
            <View style={styles.content}>{children}</View>
            <View style={styles.footer}>
                <Text>Bottom</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    header: {
        padding: 16,
        backgroundColor: 'purple',
    },
    content: {
        flex: 1,
    },
    footer: {
        padding: 16,
        backgroundColor: 'purple',
    },
});
