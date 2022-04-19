import React, {Component} from 'react';
import { View, Text, StyleSheet,FlatList} from 'react-native';

import Pessoa from './src/Pessoas/Pessoas';

class App extends Component{
  
  constructor(props){
     super(props);
     this.state ={
        feed:[
           {id:'1',nome: 'Wagner', idade: 41, email: 'wagner@wagner.com'},
           {id:'2',nome: 'Lucia', idade: 35, email: 'lucia@lucia.com'},
           {id:'3',nome: 'Melissa', idade: 8, email: 'melissa@melissa.com'},
           {id:'4',nome: 'Enzo', idade: 6, email: 'enzo@enzo.com'},
           {id:'5',nome: 'Roberto', idade: 75, email: 'roberto@roberto.com'},
           {id:'6',nome: 'Natalia', idade: 35, email: 'natalia@natalia.com'},
        ]

     };
  }
  
  
   render(){
    return (
      <View style={StyleSheet.container}>
      
      <FlatList
      data={this.state.feed}
      keyExtractor={(item) => item.id}
      renderItem={ ({item}) => <Pessoa data ={item} /> }
      />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
 
});

export default App;

