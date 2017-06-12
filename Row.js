import React, { Component } from 'react'
import {
  Text, View, StyleSheet, Switch, TouchableOpacity
} from 'react-native'


const Row = ({ text, complete, toggleSwitch , removeTodo }) => (
  <View style={styles.container} >
    <Switch value={complete} onValueChange={toggleSwitch} />
    <View style={styles.textWrapStyle} >
      <Text style={[styles.text, complete && styles.complete]}>{text} </Text>
    </View>
    <TouchableOpacity onPress={removeTodo}>
      <Text style={styles.destroy}>X</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 24,
    color: "#4d4d4d",
  },
  complete: {
    textDecorationLine: 'line-through'
  },
  textWrapStyle: {
    flex: 1,
    marginHorizontal: 10
  },
  destroy: {
    fontSize: 20,
    color: '#cc9a9a',
    paddingHorizontal: 20
  }
})

export default Row 