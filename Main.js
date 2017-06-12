import React, { Component } from 'react'
import {
  Text, View, StyleSheet, ListView, Keyboard
} from 'react-native'
import Row from './Row'

class Main extends Component {

  render = () => {
    const { dataSource, toggleSwitch, removeTodo } = this.props
    const { container, list, separator } = styles
    return (
      <View style={container} >
        <ListView
          style={list}
          enableEmptySections
          dataSource={dataSource}
          onScroll={ _ => Keyboard.dismiss()}
          renderRow={({key , ...todo}) =>
            <Row key={key} toggleSwitch={ _ => toggleSwitch(key) } 
                removeTodo={ _ => removeTodo(key)} {...todo} />}

          renderSeparator={(sectionId, rowId) => <View style={separator} key={rowId} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    fontSize: 25
  },
  separator: {
    borderWidth: 1,
    borderColor: '#f5f5f5'
  },
  list: {
    backgroundColor: "#FFF",
    flex: 1
  }
})



export default Main 