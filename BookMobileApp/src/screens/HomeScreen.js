import { View, Text, StyleSheet } from 'react-native'

export default function HomeScreen() {
    return (
        <View style={styles.content}>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    }
})