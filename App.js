import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Alert, Button, ScrollView, Text, TextInput, View } from 'react-native';
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
  const [gender, setGender] = useState(0.7);
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [bloodAlcoholLevel, setBloodAlcoholLevel] = useState(0);

  const chooseAmount = Array(51).fill().map((_, i) => i);
  const [resultColor, setResultColor] = useState(StyleSheet.result)

  function calculate() {
    if (weight < 1) {
      Alert.alert(
        "Warning",
        'Please enter a number for your weight.',
        [{
          text: 'Ok',
        }]
      );
      return;
    }

    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const grams_left = grams - (burning * time);

    if ((grams_left / (weight * gender)) <= 0) {
      setBloodAlcoholLevel(0);
      setResultColor(StyleSheet.zero);
    } else if ((grams_left / (weight * gender)) < 0.5) {
      setBloodAlcoholLevel(grams_left / (weight * gender));
      setResultColor(StyleSheet.low);
    } else {
      setBloodAlcoholLevel(grams_left / (weight * gender));
      setResultColor(StyleSheet.high);
    }
  }

  return (
    <View style={StyleSheet.container}>
      <ScrollView>
        <View style={StyleSheet.row}>
          <Text style={StyleSheet.header}>Alcometer</Text>
        </View>
        <View style={StyleSheet.row}>
          <Text style={StyleSheet.label}>Weight (kg)</Text>
          <TextInput style={StyleSheet.input}
            keyboardType='numeric' placeholder='Enter your weight in kilograms.' maxLength={3}
            onChangeText={text => setWeight(text)}
          />
        </View>
        <View style={StyleSheet.row}>
          <Text style={StyleSheet.label}>Bottles</Text>
          <Picker
            onValueChange={(itemValue) => setBottles(itemValue)}
            selectedValue={bottles}>
            {chooseAmount.map((number) => (
              <Picker.Item style={StyleSheet.input} label={number.toString()} value={number} key={number} />
            ))}
          </Picker>
        </View>
        <View style={StyleSheet.row}>
          <Text style={StyleSheet.label}>Time (h)</Text>
          <Picker
            onValueChange={(itemValue) => setTime(itemValue)}
            selectedValue={time}>
            {chooseAmount.map((number) => (
              <Picker.Item style={StyleSheet.input} label={number.toString()} value={number} key={number} />
            ))}
          </Picker>
        </View>
        <View style={StyleSheet.container}>
          <Text style={StyleSheet.genderLabel}>Gender</Text>
          <Radiobutton options={buttonLabels} onPress={(value) => { setGender(value) }} defaultValue={0.7} />
        </View>
        <View style={StyleSheet.row}>
          <Button onPress={calculate} color='#0040F0' title='Calculate' />
        </View>
        <View style={StyleSheet.row}>
          <Text style={StyleSheet.result}>Blood alcohol level:</Text>
          <Text style={resultColor}>{bloodAlcoholLevel.toFixed(2)}</Text>
        </View>
      </ScrollView>
    </View>
  );
}