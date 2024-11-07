import React, { useState } from 'react';
import { View, Text, Picker, Button, StyleSheet } from 'react-native';

const RelationshipDetails = ({ navigation }) => {
  const [relationshipIntentions, setRelationshipIntentions] = useState('');
  const [qualities, setQualities] = useState([]);
  const [commitmentReadiness, setCommitmentReadiness] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Relationship Goals</Text>

      <Text>Relationship Intentions:</Text>
      <Picker selectedValue={relationshipIntentions} style={styles.picker} onValueChange={(itemValue) => setRelationshipIntentions(itemValue)}>
        <Picker.Item label="Marriage" value="marriage" />
        <Picker.Item label="Long-term relationship leading to marriage" value="long-term" />
        <Picker.Item label="Undecided" value="undecided" />
      </Picker>

      <Text>Commitment Readiness:</Text>
      <Picker selectedValue={commitmentReadiness} style={styles.picker} onValueChange={(itemValue) => setCommitmentReadiness(itemValue)}>
        <Picker.Item label="Immediately" value="immediately" />
        <Picker.Item label="Within the next 6 months" value="6_months" />
        <Picker.Item label="Within the next year" value="year" />
        <Picker.Item label="Open to timing" value="open" />
      </Picker>

      <Button title="Complete Registration" onPress={() => alert('Registration Complete')} />
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
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 12,
  },
});

export default RelationshipDetails;
