import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CharacterSheet from './CharacterSheet';
import Family from './Models/Family/family'

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      families:[]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the game Don {this.state.families[0].don.name +
          ' ' + this.state.families[0].surname}!</Text>
        <CharacterSheet family =  {this.state.families[0]}/>
      </View>
    );
  }
  componentWillMount=()=>{
    this.generateFamily('boi');
    
  }
  generateFamily=(surname)=>{
    let family = new Family('Corle',surname)

    let array = this.state.families
    array.push(family)
    this.setState({
      families: array
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
