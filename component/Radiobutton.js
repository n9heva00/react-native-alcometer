import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import StyleSheet from '../Styles'
export default function Radiobutton({ options, onPress, defaultValue }) {
  const [value, setValue] = useState(defaultValue);

  const handlePress = (selected => {
    setValue(selected);
    onPress(selected);
  })
  return (
    <>
      {
        options.map((option) => (
          <View key={option.value} style={StyleSheet.buttonContainer}>
            <Text style={StyleSheet.radioLabel}>{option.label}</Text>
            <Pressable style={StyleSheet.circle} onPress={() => handlePress(option.value)}>
              {value === option.value && <View style={StyleSheet.checkedCircle} />}
            </Pressable>
          </View>
        ))
      }
    </>
  )
}