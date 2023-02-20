import { memo } from 'react';

import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = memo(({ goal: { text, id }, deleteGoal }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{ color: '#2B0859'}} 
                 onPress={() => deleteGoal(id)}
                 style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  )
})

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    padding: 8,
    color: 'white'
  }
});