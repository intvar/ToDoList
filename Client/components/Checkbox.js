import React from 'react'
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native'

const Checkbox = ({checked})=><View style={styles.outer}>
  {checked && <View style={styles.inner}></View> }
</View>

Checkbox.propTypes = {
  checked:PropTypes.bool
}

const styles = StyleSheet.create({
  outer:{
    backgroundColor:'#9370DB',
    width:30,
    height:30,
    borderRadius:50,
    position:'relative'
  },
  inner:{
    width:20,
    height:10,
    borderBottomColor:'#fff',
    borderBottomWidth:2,
    borderLeftColor:'#fff',
    borderLeftWidth:2,
    position:'absolute',
    top:8,
    left:5,
    transform:[
      {rotate:'-45deg'}
    ]
  }
})

export default Checkbox