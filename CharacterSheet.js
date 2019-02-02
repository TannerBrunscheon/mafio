import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CharacterSheet extends React.Component {
  constructor(){
    super()
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Test</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
