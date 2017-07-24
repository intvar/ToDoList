import React from 'react'
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native'
import PropTypes from 'prop-types'
import Checkbox from './Checkbox'
import Swipeout from 'react-native-swipeout'

const ListItem = ({text, checked, onPress, onDelPress})=>{
  const swipeoutBtns = [
    {
      text: 'Удалить',
      backgroundColor:'red',
      onPress:onDelPress
    }
  ]

  return (
    <Swipeout right={swipeoutBtns}> 
      <TouchableHighlight onPress={onPress} underlayColor={'lightgrey'}>
        <View style={styles.item}>
          <Text style={styles.text}>{text}</Text>
          <View style={styles.checkbox}>
            <Checkbox checked={checked}/>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeout>
  )
}

ListItem.propTypes = {
  text:PropTypes.string.isRequired,
  checked:PropTypes.bool,
  onPress:PropTypes.func.isRequired,
  onDelPress:PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  item:{
    paddingVertical:15,
    paddingLeft:20,
    flexDirection:'row',
    justifyContent: 'space-between' 
  },
  text:{
    fontSize:18
  },
  checkbox:{
    paddingRight:20
  }
})

export default ListItem