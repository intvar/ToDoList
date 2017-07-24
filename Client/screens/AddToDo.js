import React from 'react'
import {TextInput, View, Button} from 'react-native'
import {connect} from 'react-redux'
import {createTodo} from '../actions/ToDo'

class AddToDo extends React.Component {
  static navigationOptions = {
    title: 'Добавить'
  }
  constructor(props){
    super(props)
    this.state = { text: '' }
  }
  handleAddPress = ()=>{
    const data = {
      text: this.state.text,
      checked:false
    }
    this.props.dispatch(createTodo(data))
    this.props.navigation.goBack()
  }
  render(){
    return (
      <View style={styles.screen}>
        <TextInput 
          value={this.state.text}
          style={styles.input} 
          onChangeText={(text)=>this.setState({text})}
        />
        <Button title="Добавить"  onPress={this.handleAddPress}/>
      </View> )
  }
}

const styles = {
  input:{
    width:300,
    height:30,
    borderColor:'gray',
    borderWidth:1,
  },
  screen:{
    alignItems:'center',
    paddingTop:20
  }
}

export default connect()(AddToDo)