import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CharacterSheet from './CharacterSheet';

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      dons:[]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the game Don {this.state.dons[0].sirname}!</Text>
        <CharacterSheet/>
      </View>
    );
  }
  componentWillMount=()=>{
    this.generateNewPerson('boi');

  }
  generateNewPerson=(sirname)=>{

    let member = {
      'sirname':"Consegri",
      'brains': 9,
      'brawn': 10,
      'charm': 11,
      'guts':12,
      'wit':13
    }
    let array = this.state.dons
    array.push(member)
    this.setState({
      dons: array
    })

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
