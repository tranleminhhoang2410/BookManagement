import { SafeAreaView, StyleSheet, StatusBar, Image, View } from 'react-native';

export default function AuthLayout({ children }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/images/book-logo.png')} />
            </View>
            <View styles={styles.content}>{children}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'purple',
        marginTop: StatusBar.currentHeight,
        justifyContent: 'center',
    },

    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        width: 250,
        height: 250,
        resizeMode: 'stretch',
    },
});
