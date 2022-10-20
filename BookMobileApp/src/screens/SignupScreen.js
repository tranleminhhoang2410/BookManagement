import { View, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen() {
    const navigation = useNavigation();
    return (
        <View>
            <TextInput label="Email" mode="outline" style={styles.input} />
            <TextInput label="Password" mode="outline" style={styles.input} />
            <TouchableOpacity style={styles.signup}>
                <Text style={styles.text}>Sign up</Text>
            </TouchableOpacity>
            <Text style={styles.login} onPress={() => navigation.navigate('Login')}>
                Already a user?
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
        textAlign: 'center',
        color: '#1E90FF',
    },
    signup: {
        marginTop: 12,
        padding: 12,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
});
