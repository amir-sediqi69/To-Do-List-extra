import React from 'react';
import { StyleSheet, TouchableOpacity, Button, View, SafeAreaView, Text, Alert } from 'react-native';


export default function BgButton({text, onPress}) {
  return (
    <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center'
  }
})