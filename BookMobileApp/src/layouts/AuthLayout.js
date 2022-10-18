import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'

export default function AuthLayout({ children }) {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        marginTop: StatusBar.currentHeight,
    }
})