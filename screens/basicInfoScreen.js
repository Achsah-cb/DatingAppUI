import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const BasicInformation = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [zodiacSign, setZodiacSign] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Basic Information</Text>

      <Text>First Name:</Text>
      <TextInput style={styles.input} placeholder="What is your first name?" value={firstName} onChangeText={setFirstName} />

      <Text>Last Name:</Text>
      <TextInput style={styles.input} placeholder="What is your last name?" value={lastName} onChangeText={setLastName} />

      <Text>Date of Birth:</Text>
      <TextInput style={styles.input} placeholder="DD/MM/YYYY" value={dob} onChangeText={setDob} />

      <Text>Gender:</Text>
      <Picker selectedValue={gender} style={styles.picker} onValueChange={(itemValue) => setGender(itemValue)}>
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other/Prefer not to say" value="other" />
      </Picker>

      <Text>Zodiac Sign:</Text>
      <Picker selectedValue={zodiacSign} style={styles.picker} onValueChange={(itemValue) => setZodiacSign(itemValue)}>
        <Picker.Item label="Aries" value="aries" />
        <Picker.Item label="Taurus" value="taurus" />
        <Picker.Item label="Gemini" value="gemini" />
        <Picker.Item label="Cancer" value="cancer" />
        <Picker.Item label="Leo" value="leo" />
        <Picker.Item label="Virgo" value="virgo" />
        <Picker.Item label="Libra" value="libra" />
        <Picker.Item label="Scorpio" value="scorpio" />
        <Picker.Item label="Sagittarius" value="sagittarius" />
        <Picker.Item label="Capricorn" value="capricorn" />
        <Picker.Item label="Aquarius" value="aquarius" />
        <Picker.Item label="Pisces" value="pisces" />
      </Picker>

      <Button title="Next: Relationship Details" onPress={() => navigation.navigate('RelationshipDetails')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 12,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 12,
  },
});

export default BasicInformation;
