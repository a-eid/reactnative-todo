import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, StatusBar, ListView } from 'react-native'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

filterTodos = (filter, todos) => {
  return todos.filter(todo => {
    if (filter == "Completed") return todo.complete
    if (filter == "Active") return !todo.complete
    return true
  })
}

const ds = new ListView.DataSource({ rowHasChanged: (x, y) => x !== y })

class App extends Component {
  state = {
    filter: 'All',
    value: "",
    todos: [],
    allComplete: false,
    dataSource: ds.cloneWithRows([])
  }

  handleInputChange = value => this.setState({ value })

  handleToggleAllComplete = () => {
    const todos = this.state.todos.map(todo => ({ ...todo, complete: !this.state.allComplete }))
    this.setState(ps => ({
      allComplete: !ps.allComplete,
      todos,
      dataSource: ps.dataSource.cloneWithRows(todos)
    }))
  }

  handleAddTodo = () => {
    if (!this.state.value) return
    const newTodo = {
      key: Date.now(),
      text: this.state.value,
      complete: false
    }

    this.setState(ps => ({
      todos: [...ps.todos, newTodo],
      value: "", 
      dataSource: ps.dataSource.cloneWithRows(filterTodos(ps.filter, [...ps.todos, newTodo]))
    }))
  }

  toggleSwitch = key => {
    const todos = this.state.todos.map(todo => {
      if (todo.key !== key) return todo
      return {
        ...todo,
        complete: !todo.complete
      }
    })
    this.setState({
      todos,
      dataSource: this.state.dataSource.cloneWithRows(filterTodos(this.state.filter, this.state.todos))
    })
  }

  removeTodo = key => {
    const todos = this.state.todos.filter(todo => todo.key !== key)
    this.setState({
      todos,
      dataSource: this.state.dataSource.cloneWithRows(filterTodos(this.state.filter, todos))
    })
  }

  handleFilterChange = filter => {
    this.setState({
      filter,
      dataSource: this.state.dataSource.cloneWithRows(filterTodos(filter, this.state.todos))
    })
  }

  render = () => (
    <View style={styles.container} >
      <StatusBar hidden />
      <Header value={this.state.value}
        value={this.state.value}
        onChange={this.handleInputChange}
        handleAddTodo={this.handleAddTodo}
        onToggleAllComplete={this.handleToggleAllComplete} />

      <Main
        toggleSwitch={this.toggleSwitch}
        removeTodo={this.removeTodo}
        dataSource={this.state.dataSource}
        todos={this.state.todos} />
      <Footer count={filterTodos(this.state.filter , this.state.todos).length} 
        filter={this.state.filter} filterChange={this.handleFilterChange} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  }
})

export default App 