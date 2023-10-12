import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function FontAwesome({name, size, color, onPress, style}) {
  return (<FontAwesome5 name={name} size={size} onPress={onPress} color={color} style={style} />)
}