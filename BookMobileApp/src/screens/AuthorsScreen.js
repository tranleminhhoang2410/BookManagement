import { View, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'

export default function AuthorsScreen() {
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <Text>#1</Text>
                    <Text>Author name</Text>
                </Card.Content>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },

    card: {
        marginTop: 12,
    }
})