import React from 'react'
import {View, StyleSheet} from 'react-native'

const Separator = ()=>(
  <View style={styles.separator} />
)

const styles = StyleSheet.create({
  separator:{
    marginLeft:20,
    backgroundColor:'#e1e1e1',
    height:StyleSheet.hairlineWidth,
    flex:1
  }
})

export default Separator