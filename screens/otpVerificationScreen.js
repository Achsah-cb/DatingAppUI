// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import axios from 'axios';

// const OtpVerification = ({ navigation, route }) => {
//   const [otp, setOtp] = useState('');
//   const { password } = route.params;

//   const verifyOtp = async () => {
//     try {
//       const response = await axios.post('https://example.com/api/verify-otp', { password, otp });
//       if (response.data.success) {
//         alert("OTP verified successfully!");
//         navigation.navigate('Home');
//       } else {
//         alert("Invalid OTP. Please try again.");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("OTP verification failed.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Enter OTP:</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter OTP sent to your phone"
//         value={otp}
//         onChangeText={setOtp}
//         keyboardType="number-pad"
//       />
//       <Button title="Verify OTP" onPress={verifyOtp} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 8,
//     marginBottom: 12,
//     borderRadius: 5,
//   },
// });

// export default OtpVerification;
