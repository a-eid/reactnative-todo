import React, { Component } from 'react'
import {
  Text, View, StyleSheet, TouchableOpacity
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  wrapper: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "transparent",
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center'
  },
  active: {
    borderColor: "rgba(175 ,47 ,47 , .2)"
  }
})

const { container, wrapper, text, active } = styles
const Footer = ({ count, filter, filterChange , clearCompleted }) => (
  <View style={container} >
    <View style={wrapper} >
      <Text style={text}>count {count || 0}</Text>
    </View>
    <TouchableOpacity onPress={() => filterChange("All")} style={[wrapper, filter == "All" && active]}>
      <Text style={text} >All</Text>
    </TouchableOpacity >
    <TouchableOpacity onPress={() => filterChange("Active")} style={[wrapper, filter == "Active" && active]}>
      <Text style={text}>Active</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => filterChange("Completed")} style={[wrapper, filter == "Completed" && active]}>
      <Text style={text}>Completed</Text>
    </TouchableOpacity>
    <TouchableOpacity style={wrapper} onPress={clearCompleted}>
      <Text style={text}>clear completed</Text>
    </TouchableOpacity>
  </View>
)

export default Footer   