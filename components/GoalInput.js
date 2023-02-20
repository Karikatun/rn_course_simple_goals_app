import React, { memo, useState } from 'react'

import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = memo(({ addGoalHandler, modalIsVisible, closeModal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHAndler = (enterText) => {
    setEnteredGoalText(enterText);
  };

  const handleAddGoal = () => {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText('')
  }

  const handleCloseModal = () => {
    setEnteredGoalText('');
    closeModal()
  }

  return (
    <Modal visible={modalIsVisible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput value={enteredGoalText} 
                   onChangeText={goalInputHAndler} 
                   style={styles.textInput} 
                   placeholder='Your course goal!' />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={handleCloseModal} color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={handleAddGoal} color='#b180f0' />
          </View>
        </View>
      </View>
    </Modal>
  )
})

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#e4d0ff',
    borderRadius: 6,
    backgroundColor: '#e4d0ff',
    color: '#120438',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    marginHorizontal: 8
  }
});