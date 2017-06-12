import React, { Component } from 'react'
import {
  Text, View, TextInput, StyleSheet, TouchableOpacity
} from 'react-native'


const Header = ({ onChange, value, handleAddTodo, onToggleAllComplete }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggleAllComplete}>
        <Text style={styles.toggleIcon}>{String.fromCharCode(10003)}</Text>
      </TouchableOpacity>
      <TextInput
        underlineColorAndroid='rgba(0,0,0,0)'
        style={styles.input}
        blurOnSubmit={false}
        onChangeText={onChange}
        value={value}
        onSubmitEditing={handleAddTodo}
        returnKeyType="done"
        placeholder="What needs to be done" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  toggleIcon: {
    fontSize: 30,
    color: '#ccc',
    marginLeft: 16
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 22
  }
})

export default Header 