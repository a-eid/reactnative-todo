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
    padding:10,
    borderRadius: 5 , 
    borderWidth: 1,
    borderColor: "transparent"
  },
  text: {
    // fontSize: 18
  },
  active: {
    borderColor: "rgba(175 ,47 ,47 , .2)"
  }
})

const { container, wrapper, text, active } = styles
const Footer = ({count, filter , filterChange }) => (
  <View style={container} >
    <View style={wrapper} >
      <Text >count {count || 0}</Text>
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
  </View>
)

export default Footer   