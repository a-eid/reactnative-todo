## to add a specific platform 

```javascript 
...Platform.select({
  android: {
   ... styles  
  },
  android: {
   ... styles  
  }
})
```


## TextINput . 

there is no `event.target.value` there is `event.nativeEvent.text` 
you could also use `onChangeText{text => this.setState({value: texT})}` 


## ListView 
you have to specify a dataSource to the ListView which take an object
`{rowHasChanged: ({(x , t) => x != y})}` which helps the listview to render efficently 

## statusBar
`<StatusBar hidden />` will hide the statusbar up top for you 

ReactNative is Awesome ...















