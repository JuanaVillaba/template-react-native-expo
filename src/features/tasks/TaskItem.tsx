import { View, Text, StyleSheet } from 'react-native';
type Props = {
titulo: string;
completada: boolean;
};

export function TaskItem({ titulo, completada }: Props) {
return (
    <View style={styles.container}>
        <Text style={[styles.texto, completada && styles.completada]}>
            {titulo}
        </Text>
    </View>
    );
}
const styles = StyleSheet.create({
    container: { padding: 16, borderBottomWidth: 1, borderColor: '#E2E8F0'
},
    texto: { fontSize: 16, color: '#0F172A' },
    completada: { textDecorationLine: 'line-through', color: '#94A3B8' },
})