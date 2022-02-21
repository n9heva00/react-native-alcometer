import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import Radiobutton from './component/Radiobutton';
import StyleSheet from './Styles';

export default function App() {
  const buttonLabels = [
    {
      label: 'Male',
      value: 0.7
    },
    {
      label: 'Female',
      value: 0.6
    }
  ]
  const [selectedGender, setSelectedGender] = useState(0.7);
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [bloodAlcoholLevel, setBloodAlcoholLevel] = useState(0);

  const chooseAmount = Array(51).fill().map((_, i) => i);
  console.log(chooseAmount);
  console.log("weight " + weight + " bottles " + bottles)
  return (
    <View style={StyleSheet.container}>
      <ScrollView>
        <View style={StyleSheet.row}>
          <Text style={StyleSheet.header}>Alcometer</Text>
        </View>
        <View style={StyleSheet.row}>
          <Text style={StyleSheet.label}>Weight (kg)</Text>
          <TextInput value={weight} onChangeText={text => setWeight(text)}
            keyboardType='number-pad' placeholder='Enter your weight in kilograms.' maxLength={3}
          />
        </View>
        <View style={StyleSheet.row}>
          <Text style={StyleSheet.label}>Bottles</Text>
          <Picker 
          onValueChange={(itemValue) => setBottles(itemValue)} 
          selectedValue={bottles}>
            {chooseAmount.map((number) => (
              <Picker.Item label={"" + number} value={number} key={number} />
            ))}
          </Picker>
        </View>
        <View style={StyleSheet.row}>
          <Text style={StyleSheet.label}>Time (h)</Text>
          <Picker 
          onValueChange={(itemValue) => setTime(itemValue)} 
          selectedValue={time}>
            {chooseAmount.map((number) => (
              <Picker.Item label={"" + number} value={number} key={number} />
            ))}
          </Picker>
        </View>
        <View style={StyleSheet.container}>
          <Text style={StyleSheet.label}>Gender</Text>
          <Radiobutton options={buttonLabels} onPress={(value) => { setSelectedGender(value) }} defaultValue={0.7} />
        </View>
        <View style={StyleSheet.row}>
          <Button color='#0040F0' title='Calculate' />
        </View>
        <View style={StyleSheet.row}>
          <Text style={StyleSheet.result}>Blood alcohol level:</Text>
        </View>
      </ScrollView>
    </View>
  );
}