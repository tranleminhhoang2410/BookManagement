import { View, Text, StyleSheet, Image } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            <Image style={styles.logo} source={require('../../assets/images/book-logo.png')} />
            <Text style={styles.title}>Book Management App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 16,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: 52,
        flexDirection: 'row'
    },

    logo: {
        height: 52,
        width: 52,
    },

    title: {
        color: 'white',
    }
})