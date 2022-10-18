import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text>Header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 16,
        backgroundColor: 'purple',
    },
})