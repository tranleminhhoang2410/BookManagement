import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function UserScreen() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.logout} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.text}>Log out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },

    logout: {
        marginTop: 12,
        padding: 12,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: 'white',
    }
})

