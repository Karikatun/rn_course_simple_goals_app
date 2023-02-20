import React, { useMemo, useState } from 'react';

import { Button, FlatList, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addGoalHandler = (enteredGoalText) => {
    if (enteredGoalText.length > 0) {
      setCourseGoals(
        currentCourseGoals => 
        [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }]
      );

      toggleOpenModal();
    }
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals(
      currentCourseGoals => 
      currentCourseGoals.filter(item => item.id !== id)
    );
  }

  const toggleOpenModal = () => {
    setModalIsVisible(prev => !prev);
  }

  const renderCourseGoalsList = useMemo(() => (
    <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} 
                showsVerticalScrollIndicator={false}
                alwaysBounceVertical={false}
                renderItem={({ item }) => <GoalItem goal={item} deleteGoal={deleteGoalHandler} />} 
                keyExtractor={(item) => `${item.id}`} />
    </View>
  ), [courseGoals]);

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add new goal' color='#a065ec' onPress={toggleOpenModal} />
        <GoalInput addGoalHandler={addGoalHandler} 
                  modalIsVisible={modalIsVisible} 
                  closeModal={toggleOpenModal} />
        {renderCourseGoalsList}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  goalsContainer: {
    flex: 5
  }
});
