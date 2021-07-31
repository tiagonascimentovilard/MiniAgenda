import React from 'react';
import { View, Text, TextInput, StyleSheet , Button, SafeAreaView , FlatList } from 'react-native'
import axios from 'axios';
import Colors from '../styles/Colors'
import DiaSemana from '../components/DiaSemana'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Agenda extends React.Component {

  constructor(props) {
    let hojeS = new Date().getDay().toString();
    //let hojeS = 5;
    super(props);
    this.state = {persons: [], hoje: hojeS};
  }

  componentDidMount() {
    try {
      let diaSem = this.state.hoje;
      let paramsJson =  {ds: diaSem};
      axios.get('http://appx.itmwin.com/default.asp', {params: paramsJson })
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log('uuu'+JSON.stringify(this.state.persons));
      })
    } catch (error) {
      console.error('erro API: '+error)
    }
  }

  render() {
    const diSemana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
    return (
      <View style={styles.container}>   
          <View style={styles.semana}>
            <DiaSemana dia={parseInt(this.state.hoje)}/>
          </View>
        <FlatList data={this.state.persons} renderItem={({item}) => (
            <View key={item.id}  style={styles.containerItem}>
              <View style={styles.containerNome}>
                <View style={styles.localAtividado}>
                  <Text style={styles.nmlocal}>{item.nomelocal}</Text>
                  <Text style={styles.atividade}>- {item.nome}</Text>
                </View>
                <Text style={styles.agendado}>{item.agendado}</Text>
              </View>
              <View style={styles.actionContainer}>
                <Icon name="clock-o" size={22} color={Colors.concretoL}  style={styles.relogio}/>
                <Text style={styles.horario}>{item.inicio}  - {item.fim}</Text>
              </View>
            </View>
        )}/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  containerItem: {
     backgroundColor: Colors.clouds,
     margin: 5,
     borderRadius: 10,
     borderColor: 'rgba(255,255,255,0.1)',
     borderStyle: 'solid',
     padding: 12,
  },   
  semana: {
    alignSelf: 'center',
    marginTop: 10,
 }, 
  actionContainer:{
      flexDirection: 'row',
      alignSelf: 'flex-end',
      justifyContent: 'center', 
      paddingTop: 10,
  },
  relogio:{
      marginRight: 8,
      color: 'rgba(0,0,0,0.1)',
  },
  horario:{
    fontSize: 16,
    color: Colors.concreto,
  },
  actionButtonText:{
      fontSize: 12,
      color: Colors.white,
  },
  container: {
    //backgroundColor: Colors.asphalt,
  },
  containerNome: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
 },
  atividade:{
    fontSize: 18,
    marginLeft: 10,
    letterSpacing: 1,
    color: Colors.blue,
    marginTop: -1,
  },
  nmlocal:{
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: 'bold',
    color: Colors.lightBlue,
    marginTop: -1,
  },
  agendado:{
      marginTop: 3,
      color: Colors.red,
  },
  localAtividado:{
    flexDirection: 'row',
  },
});