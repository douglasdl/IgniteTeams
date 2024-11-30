import { StyleSheet, Text, View } from 'react-native';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleContainer}>Players</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    
    gap: 8,
    color: '#fff'
  },
  container: {
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
});