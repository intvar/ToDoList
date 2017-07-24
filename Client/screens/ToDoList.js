import React from 'react'
import {View, StyleSheet, FlatList, Text, TouchableOpacity, Button} from 'react-native'
import ListItem from '../components/ListItem'
import Separator from '../components/Separator'
import {connect} from 'react-redux'
import {updateTodo, fetchToDos, deleteTodo} from '../actions/ToDo'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'

class ToDoList extends React.Component {

  static navigationOptions = ({navigation})=>{
    return {
      title:'Мои дела',
      headerRight:<TouchableOpacity 
        style={{paddingRight:20}}
        onPress={()=>navigation.navigate('Add')}>
        <Icon name="ios-add" size={30} color="#9370DB"/>
      </TouchableOpacity>
    }
  }
  componentDidMount(){
    this.props.fetchToDos()
  }
  render(){
    return ( 
      <View>
        <FlatList 
          data={this.props.listToDo}
          renderItem={({item})=>
            <ListItem 
              text={item.text} 
              checked={item.checked}
              onPress={()=>this.props.handlePress(item.id, {checked:!item.checked})}
              onDelPress={()=>this.props.handleDelPress(item.id)}
            /> 
          }
          ItemSeparatorComponent={Separator}
          keyExtractor={item=>item.text} 
        />
      </View>
    )
  }
}

ToDoList.propTypes = {
  listToDo:PropTypes.array,
  handlePress:PropTypes.func,
  fetchToDos:PropTypes.func,
  handleDelPress:PropTypes.func
}

const styles = StyleSheet.create({
  addButton:{
    paddingTop:10,
    paddingRight:20
  }
})

const mapStateToProps = state=>({listToDo:state.list})
const mapDispatchToProps = (dispatch)=>({
  handlePress:(id, data)=>dispatch(updateTodo(id, data)),
  handleDelPress:id=>dispatch(deleteTodo(id)),
  fetchToDos:()=>dispatch(fetchToDos())
})


export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)