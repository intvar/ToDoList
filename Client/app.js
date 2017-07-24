import React from 'react'
import {Provider} from 'react-redux'
import store from './config/store'
import ToDoList from './screens/ToDoList'
import AddToDo from './screens/AddToDo'
import { StackNavigator } from 'react-navigation'

import Icon from 'react-native-vector-icons/Ionicons'

const Left = ({onPress})=>(<TouchableOpacity>
  <Icon name="ios-add" size={30} color="#900"/>
</TouchableOpacity>)

const SimpleApp = StackNavigator({
  List:{screen:ToDoList},
  Add:{screen:AddToDo}
})

export default ()=>
  <Provider store={store}>
    <SimpleApp />
  </Provider>