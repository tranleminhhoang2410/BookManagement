import { View, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation();
    return (
        <View>
            <TextInput label="Email" mode="outline" style={styles.input} />
            <TextInput label="Password" mode="outline" style={styles.input} />
            <TouchableOpacity style={styles.login}>
                <Text style={styles.text}>Log in</Text>
            </TouchableOpacity>
            <Text style={styles.signup} onPress={() => navigation.navigate('Signup')}>
                Don't have an account?
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginTop: 12,
    },
    login: {
        marginTop: 12,
        padding: 12,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signup: {
        marginTop: 12,
        padding: 12,
        textAlign: 'center',
        color: 'aquablue',
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
});
