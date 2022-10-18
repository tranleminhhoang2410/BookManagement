import { Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Login Form</Text>
            <Button title="Login" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}